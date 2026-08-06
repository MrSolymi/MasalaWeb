import { redirect } from '@sveltejs/kit';
import { baseLocale, extractLocaleFromUrl, localizeHref } from '$lib/paraglide/runtime';

export const prerender = true;
export const trailingSlash = 'always';

// Every route is written and reachable only via its localized URL (/en/..., /hu/...).
// If a request has no locale prefix (e.g. someone hits the bare domain root),
// send it to the default-locale URL instead of silently rendering English at an
// unprefixed, undeclared URL.
export const load = ({ url }) => {
	if (!extractLocaleFromUrl(url)) {
		redirect(307, localizeHref(url.pathname, { locale: baseLocale }));
	}
};
