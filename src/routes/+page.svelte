<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data } = $props();
</script>

<Seo title={data.title} description={data.description} />

<section class="flex flex-col items-start gap-4 py-12">
	<h1 class="text-4xl font-bold tracking-tight">{m.home_hero_title()}</h1>
	<p class="max-w-prose text-lg text-muted-foreground">{m.home_hero_tagline()}</p>
	<Button href={resolve(localizeHref('/menu') as Pathname)} size="lg">
		{m.home_hero_cta()}
	</Button>
</section>
