<script lang="ts">
    import { onMount } from "svelte";

    type Theme = "light" | "dark";

    let { label = "Toggle dark mode" }: { label?: string } = $props();

    let theme = $state<Theme>("light");

    // The real theme is applied by a blocking script in <head> to avoid a flash;
    // this island only mirrors that state once hydrated.
    onMount(() => {
        theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    });

    const DURATION = 620;

    // A `fill: forwards` animation stays attached to the view-transition
    // pseudo-element and would re-apply its end state to the *next* transition's
    // snapshot, so it has to be cancelled once the transition is torn down.
    let clipAnimation: Animation | null = null;

    function applyTheme(next: Theme) {
        theme = next;
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("mb-theme", next);
        } catch {
            // storage can be unavailable in private mode — theme still applies for this page
        }
    }

    async function toggle(event: MouseEvent) {
        const next: Theme = theme === "dark" ? "light" : "dark";
        const root = document.documentElement;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion || typeof document.startViewTransition !== "function") {
            applyTheme(next);
            return;
        }

        // The circle grows from (or collapses into) the centre of the button.
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y),
        );

        // The circle always "belongs" to light: switching on, light shines out
        // of the button; switching off, light collapses back into it.
        const expanding = next === "light";
        root.style.setProperty("--theme-switch-x", `${x}px`);
        root.style.setProperty("--theme-switch-y", `${y}px`);
        root.dataset.themeTransition = expanding ? "in" : "out";

        const transition = document.startViewTransition(() => applyTheme(next));

        // Rapid re-clicks: drop any animation still attached from the last run.
        clipAnimation?.cancel();
        clipAnimation = null;

        try {
            await transition.ready;

            const clip = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            clipAnimation = root.animate(
                { clipPath: expanding ? clip : [...clip].reverse() },
                {
                    duration: DURATION,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    // Without this the snapshot snaps back to unclipped for one
                    // frame before the transition tears down (dark flash).
                    fill: "forwards",
                    pseudoElement: expanding
                        ? "::view-transition-new(root)"
                        : "::view-transition-old(root)",
                },
            );
        } catch {
            // transition was skipped (e.g. hidden tab) — the theme is applied anyway
        }

        try {
            await transition.finished;
        } finally {
            clipAnimation?.cancel();
            clipAnimation = null;
            delete root.dataset.themeTransition;
            root.style.removeProperty("--theme-switch-x");
            root.style.removeProperty("--theme-switch-y");
        }
    }
</script>

<button
    type="button"
    onclick={toggle}
    aria-pressed={theme === "dark"}
    aria-label={label}
    title={label}
    class="theme-toggle inline-flex size-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-edge text-sm text-ink transition-colors duration-200 hover:border-coral hover:text-coral-text"
>
    {#if theme === "dark"}
        <i class="fa-solid fa-sun" aria-hidden="true"></i>
    {:else}
        <i class="fa-solid fa-moon" aria-hidden="true"></i>
    {/if}
</button>

<style>
    /* The icon swaps mid-transition, so give it a small spin/fade of its own. */
    .theme-toggle :global(i) {
        animation: theme-icon-in 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes theme-icon-in {
        from {
            opacity: 0;
            transform: rotate(-120deg) scale(0.4);
        }
        to {
            opacity: 1;
            transform: rotate(0) scale(1);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .theme-toggle :global(i) {
            animation: none;
        }
    }
</style>
