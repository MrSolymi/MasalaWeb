import { locales, localizeHref } from '$lib/paraglide/runtime';
import { routePaths } from '$lib/content/routes';
import { siteOrigin } from '$lib/content/site';

export const prerender = true;
// Override the site-wide trailingSlash:'always' — /sitemap.xml is a
// well-known URL search engines expect without a trailing slash.
export const trailingSlash = 'never';

export const GET = () => {
	// Every page is served with a trailing slash (trailingSlash: 'always' in
	// +layout.ts) — match that here so the sitemap points straight at the
	// canonical URL instead of one that 308s.
	const urls = routePaths.flatMap((path) =>
		locales.map((locale) => {
			const href = siteOrigin + localizeHref(path, { locale });
			return href.endsWith('/') ? href : `${href}/`;
		})
	);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `\t<url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
