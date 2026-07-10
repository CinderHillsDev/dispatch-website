# Dispatch Website

Public marketing landing for **Dispatch** — the self-hosted **email relay** (SMTP + HTTP ingestion, SMTP +
provider REST delivery). Deployed publicly at **https://dispatchrelay.app** via **Cloudflare
Pages**. Documentation lives on a separate site: **https://docs.dispatchrelay.app** (the `dispatch-docs` repo).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
```

Astro + Tailwind (CDN). The landing page is `src/pages/index.astro`; doc links point at the docs subdomain.

## Deploy

Cloudflare Pages, connected to this repo:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** `dispatchrelay.app` (set in the Cloudflare Pages dashboard)

> Downloads: the landing links to `/download`, which points at the free, open-source (Apache-2.0)
> builds — GitHub releases (<https://github.com/CinderHillsDev/dispatch-platform/releases>), the Docker
> image, and platform installers.
