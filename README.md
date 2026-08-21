# mbengel.dev

Personal portfolio. Static, bilingual (EN/DE).

## Stack

- **Astro** static output, one island for the theme toggle
- **Svelte 5** for that island (runes)
- **Tailwind 4** configured CSS-first in `src/styles/global.css`
- **Bun** as package manager and runtime

## Commands

| Command                | Action                                |
| :--------------------- | :------------------------------------ |
| `bun install`          | Install dependencies                  |
| `bun run dev`          | Dev server at `localhost:4321`        |
| `bun run build`        | Build to `./dist/`                    |
| `bun run preview`      | Preview the production build          |
| `bun run check`        | Type check with `astro check`         |
| `bun run format`       | Format with Prettier                  |
| `bun run format:check` | Verify formatting, same check CI runs |
| `bun run lighthouse`   | Build and audit with Lighthouse CI    |

## Structure

```text
src/
├── components/     UI, ThemeToggle.svelte is the only island
├── data/           projects, skills, timeline
├── i18n/           ui.ts holds all EN/DE copy, utils.ts the helpers
├── layouts/        Layout.astro, includes the no-flash theme script
├── pages/          index.astro (en), de/index.astro
└── styles/         global.css, Tailwind theme tokens
```

Astro i18n with `prefixDefaultLocale: false`. English served from `/`, German from `/de/`.

## Notes

- Colour tokens live in `src/styles/global.css`. Coral variants (`coral-text`,
  `coral-display`, `on-coral`) exist to meet WCAG AA contrast. Plain `coral` is
  for fills and decorative icons only.
- TypeScript pinned to v6. Version 7 dropped the programmatic compiler API that
  `astro check` needs.
- CI runs format check, type check, build, then a Lighthouse audit of both locales.
