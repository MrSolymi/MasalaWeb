import * as m from '$lib/paraglide/messages.js';

export type NavRoute = {
	path: string;
	label: () => string;
};

export const navRoutes: NavRoute[] = [
	{ path: '/', label: m.nav_home },
	{ path: '/menu', label: m.nav_menu },
	{ path: '/about', label: m.nav_about },
	{ path: '/gallery', label: m.nav_gallery },
	{ path: '/contact', label: m.nav_contact }
];

// Plain (delocalized) paths, reused by the sitemap generator.
export const routePaths = navRoutes.map((route) => route.path);
