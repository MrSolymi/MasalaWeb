import * as m from '$lib/paraglide/messages.js';

export const load = () => ({
	title: `${m.about_title()} — ${m.site_name()}`,
	description: m.content_coming_soon()
});
