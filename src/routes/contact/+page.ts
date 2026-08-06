import * as m from '$lib/paraglide/messages.js';

export const load = () => ({
	title: `${m.contact_title()} — ${m.site_name()}`,
	description: m.contact_title()
});
