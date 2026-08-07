# MasalaWeb

Restaurant website skeleton. SvelteKit (static-prerendered) + Tailwind + shadcn-svelte, with
English/Hungarian at separate URLs (`/en/...`, `/hu/...`), deployed to Cloudflare Workers as
static assets.

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

## Content still to fill in

Everything under [`src/lib/content/`](src/lib/content) and the `messages/en.json` /
`messages/hu.json` translation files is placeholder — restaurant name, phone number, address,
menu, photos, and real copy all need to be dropped in once available. Page routes already exist
for Home, Menu, About, Gallery, and Contact under [`src/routes/`](src/routes).
