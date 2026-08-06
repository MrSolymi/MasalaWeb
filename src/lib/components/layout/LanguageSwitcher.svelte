<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';

	const localeLabels: Record<string, string> = { en: 'EN', hu: 'HU' };
</script>

<nav aria-label={m.language_switch_label()} class="flex items-center gap-1 text-sm font-medium">
	{#each locales as locale, i (locale)}
		{#if i > 0}
			<span class="text-muted-foreground select-none" aria-hidden="true">/</span>
		{/if}
		<!-- Full reload, not SvelteKit's client-side nav: m.*() calls read
		     window.location directly, so already-mounted components (this one,
		     the header nav, the footer) never notice a client-side URL change
		     and stay in the old language until something forces a fresh mount. -->
		<a
			href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
			aria-current={getLocale() === locale ? 'page' : undefined}
			data-sveltekit-reload
			class="rounded-md px-1.5 py-1 text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground aria-[current=page]:underline"
		>
			{localeLabels[locale] ?? locale}
		</a>
	{/each}
</nav>
