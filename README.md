# SvelteKit Template

A starter template for [bolt.diy](https://github.com/stackblitz-labs/bolt.diy).

## Purpose

This template is designed for use with **<https://github.com/stackblitz-labs/bolt.diy>**. bolt.diy fetches
these files at runtime and imports them into a fresh WebContainer project when you ask for a SvelteKit project,
so everything here needs to install and build with no extra setup.

Modified by [Dustin Loring](https://github.com/Dustinwloring1988) (Dustinwloring1988) in October 2026.

## Stack

| Package | Version |
| --- | --- |
| @sveltejs/kit | ^3.0.1 |
| @sveltejs/vite-plugin-svelte | ^7.3.1 |
| svelte | ^5.57.2 |
| @sveltejs/adapter-auto | ^8.0.0 |
| svelte-check | ^4.7.6 |
| TypeScript | ^6.0.3 |
| Vite | ^8.3.4 |

Node 20 or newer is required.

## Commands

```bash
npm install   # install dependencies
npm run dev   # vite dev — dev server
npm run build # vite build — production build
npm run preview # vite preview — local preview server
npm run check # svelte-kit sync && svelte-check --tsconfig ./jsconfig.json
```

## About this template

A SvelteKit project using Svelte 5 runes syntax. The adapter is configured as `auto` in `vite.config.js`.
The `imports` map maps `#lib` to `./src/lib`. The `jsconfig.json` extends `./src/tsconfig.json` for
TypeScript path resolution. Key migrations from Svelte 4 to 5 include: `$app/stores` → `$app/state`,
`$app/environment` → `$app/env`, `spring()` → `Spring` class, and `on:click` → `onclick`.

## Upgraded to Svelte 5, Kit 3, Vite 8 (October 2026)

This was the most involved upgrade. The template was originally on Svelte 3 / Kit 1 / Vite 5. Each major
was stepped: Svelte 3 → 4 → 5, Kit 1 → 2 → 3, Vite 5 → 6 → 7 → 8. Key migrations:

- **Adapter**: `svelte.config.js` was deleted; adapter-auto moved into `vite.config.js` with
  `adapter(auto)()`.
- **$lib**: The `imports` map in `package.json` was added: `"#lib": "./src/lib"`.
- **$app/stores** → **$app/state**: All store references updated.
- **$app/environment** → **$app/env**: All env references updated.
- **jsconfig.json**: Now extends `./src/tsconfig.json` instead of root.
- **$app/environment**: Moved to `$app/env`; Vite 8 compatibility.
- **`spring()`** → **`Spring`**: The `spring()` helper was replaced with the `Spring` class from
  `@sveltejs/kit`.
- **`on:click`** → **`onclick`**: Directive kebab-case changed to camelCase.
- **Tailwind**: `tailwind.config.js` removed; styles moved into `src/lib/styles.css` with `@tailwind`
  directives.
- **svelte-check** was kept at ^4.7.6 for Svelte 5 compatibility (^5 is for Svelte 6+).

TypeScript was updated to ^6.0.3 to satisfy Svelte 5 and Vite 8 peer requirements.

## Verification

- `npm install`, `npm run build`, and `npm run check` all pass
- The app renders client-side with Svelte 5 runes
- Confirmed `$app/stores` → `$app/state` and `$app/env` work at runtime