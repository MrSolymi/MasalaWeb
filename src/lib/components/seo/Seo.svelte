<script lang="ts">
	import { page } from '$app/state';
	import { locales, baseLocale, localizeHref } from '$lib/paraglide/runtime';
	import { siteOrigin } from '$lib/content/site';

	let { title, description }: { title: string; description: string } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={siteOrigin + page.url.pathname} />
	{#each locales as locale (locale)}
		<link
			rel="alternate"
			hreflang={locale}
			href={siteOrigin + localizeHref(page.url.pathname, { locale })}
		/>
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href={siteOrigin + localizeHref(page.url.pathname, { locale: baseLocale })}
	/>
</svelte:head>
