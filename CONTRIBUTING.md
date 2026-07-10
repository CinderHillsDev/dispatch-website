# Contributing to the Dispatch website

This is the public marketing site for **Dispatch**, the free, open-source (Apache-2.0) self-hosted email
relay. The product itself lives in [`dispatch-platform`](https://github.com/CinderHillsDev/dispatch-platform);
the documentation lives in [`dispatch-docs`](https://github.com/CinderHillsDev/dispatch-docs).

Improvements to copy, design, accessibility, and correctness are all welcome.

## Development

Built with **Astro + Tailwind**. You need **Node.js 20+**.

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # static output in dist/
```

The landing page is `src/pages/index.astro`; the downloads page is `src/pages/download.astro`. Doc links
point at the docs subdomain (`docs.dispatchrelay.app`).

## Pull request flow

1. Fork and branch off `main`.
2. Make your change; keep the visual style and tone consistent with the existing pages.
3. Run `npm run build` and confirm it succeeds.
4. Open a PR describing what changed and why.

## Notes

- Keep content factually in sync with the product (versions, download links, feature claims).
- **Use ASCII hyphens (`-`) only - no em dashes (U+2014)**, to match the rest of the project.
- Found a security issue with the site or the product? See [SECURITY.md](SECURITY.md).

## License

By contributing, you agree your contributions are licensed under the [Apache License 2.0](LICENSE).
