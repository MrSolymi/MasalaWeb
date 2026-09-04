import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			prerender: {
				// The root "/" only redirects (see +layout.ts); crawling it alone
				// finds nothing, so the real per-language homepages are added as
				// explicit crawl entries. Every other page is discovered from links.
				entries: ['*', '/en', '/hu']
			}
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true,
			// Resolve the locale from the URL prefix (not a cookie), since every
			// page is static-prerendered per language — the URL is the only
			// signal available at build time.
			strategy: ['url', 'baseLocale'],
			// Prefix both locales (/en/..., /hu/...) so neither language has an
			// implicit "default" URL — keeps them symmetric and both indexable.
			urlPatterns: [
				{
					pattern: ':protocol://:domain(.*)::port?/:path(.*)?',
					localized: [
						['en', ':protocol://:domain(.*)::port?/en/:path(.*)?'],
						['hu', ':protocol://:domain(.*)::port?/hu/:path(.*)?']
					]
				}
			]
		})
	]
});
