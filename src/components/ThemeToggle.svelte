<script lang="ts">
  import { onMount } from 'svelte';

  type Theme = 'light' | 'dark';

  let { label = 'Toggle dark mode' }: { label?: string } = $props();

  let theme = $state<Theme>('light');

  // The real theme is applied by a blocking script in <head> to avoid a flash;
  // this island only mirrors that state once hydrated.
  onMount(() => {
    theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  });

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('mb-theme', theme);
    } catch {
      // storage can be unavailable in private mode — theme still applies for this page
    }
  }
</script>

<button
  type="button"
  onclick={toggle}
  aria-pressed={theme === 'dark'}
  aria-label={label}
  title={label}
  class="inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-edge text-[0.9rem] text-ink transition-colors duration-200 hover:border-coral hover:text-coral"
>
  {#if theme === 'dark'}
    <i class="fa-solid fa-sun"></i>
  {:else}
    <i class="fa-solid fa-moon"></i>
  {/if}
</button>
