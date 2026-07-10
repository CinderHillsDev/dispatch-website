// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Marketing landing for Dispatch, served at the root of the custom domain (dispatchrelay.app) via
// Cloudflare Pages. Docs live on a separate site (docs.dispatchrelay.app, the dispatch-docs repo).
// Tailwind is compiled at build time (Vite plugin) - nothing loads from a CDN at runtime.
export default defineConfig({
  site: 'https://dispatchrelay.app',
  base: '/',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
