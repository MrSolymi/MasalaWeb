import * as m from '$lib/paraglide/messages.js';

export const load = () => ({
	title: `${m.menu_title()} - ${m.site_name()}`,
	description: m.menu_intro()
});
