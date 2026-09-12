# MasalaWeb

Website for [Masala Garden](https://masalagarden.hu), a Pakistani/Indian restaurant in Debrecen.
SvelteKit (static-prerendered) + Tailwind + shadcn-svelte, with English/Hungarian at separate
URLs (`/en/...`, `/hu/...`), deployed to Cloudflare Workers as static assets.

## Stack

- **pnpm** + **TypeScript**
- **SvelteKit**, fully prerendered via `@sveltejs/adapter-static` (no backend, no server code
  runs at request time — see `wrangler.jsonc`)
- **Tailwind CSS v4** + **shadcn-svelte** (`pnpm dlx shadcn-svelte@latest add <component>` to add
  more UI components)
- **Paraglide JS** for i18n — English is the base locale but both locales are URL-prefixed
  (`/en/...`, `/hu/...`); see `vite.config.ts` for the `strategy`/`urlPatterns` config that makes
  this work
- **Cloudflare Workers** (assets-only Worker, deployed via `wrangler`)

## SEO

- Each route's `+page.ts` sets a localized `title`/`description`, rendered by
  [`src/lib/components/seo/Seo.svelte`](src/lib/components/seo/Seo.svelte) along with a
  `rel="canonical"` link and `hreflang` alternates (including `x-default`) for every locale.
- [`src/routes/sitemap.xml/+server.ts`](src/routes/sitemap.xml/+server.ts) generates
  `sitemap.xml` from `routePaths` × `locales`; [`static/robots.txt`](static/robots.txt) points to
  it.
- Bare, unprefixed URLs (`/`, `/menu`, `/about`, `/gallery`, `/contact`) only exist as thin
  client-side redirect stubs (see `+layout.ts`) — prerendering them produces a bare
  `<script>`+meta-refresh fragment with a `200` status and no real `<html>`/`<head>`, which
  Google reports as a redirect error instead of following. [`static/_redirects`](static/_redirects)
  fixes this with real edge-level `301`s to the default-locale (`/en/...`) pages — Cloudflare
  applies it to static assets with no server code needed, so it fits the assets-only Worker setup.

## Developing

```sh
pnpm install
pnpm dev            # http://localhost:5173/en, /hu
```

## Building & previewing

```sh
pnpm build          # outputs the static site to build/
pnpm preview         # vite preview of the build
pnpm cf:preview      # closer to production: runs `wrangler dev` against build/
```

## Deploying

1. Push this repo to GitHub (or GitLab).
2. Cloudflare dashboard → **Workers & Pages → Create → Workers → Connect to Git** (this is
   _Workers Builds_, not the older Pages product). Build command: `pnpm build`. Assets directory:
   `build`.
3. Every push to `main` auto-deploys; other branches get preview deployments.
4. Once deployed, attach `masalagarden.hu` under the Worker's **Settings → Domains & Routes →
   Custom Domains**. The domain is already set in [`src/lib/content/site.ts`](src/lib/content/site.ts)
   and [`static/robots.txt`](static/robots.txt) (used for canonical URLs, hreflang tags, and the
   sitemap).

Manual deploy without the Git integration: `pnpm deploy` (runs `pnpm build && wrangler deploy`).

## Content

Restaurant info (contact details, hours, highlights, social/delivery links), the menu, and
gallery photos live under [`src/lib/content/`](src/lib/content) (`site.ts`, `menu.ts`,
`gallery.ts`). All UI copy is translated in `messages/en.json` / `messages/hu.json` (Paraglide
message files — add a key to both when adding new copy). Page routes exist for Home, Menu,
About, Gallery, and Contact under [`src/routes/`](src/routes).
