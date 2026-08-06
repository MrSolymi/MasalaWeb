<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';

	let { data } = $props();

	// Placeholder grid — replace with real photos later.
	const placeholderCount = 6;
</script>

<Seo title={data.title} description={data.description} />

<h1 class="mb-6 text-3xl font-bold tracking-tight">{m.gallery_title()}</h1>
<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
	{#each Array(placeholderCount) as _, i (i)}
		<div
			class="flex aspect-square items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
		>
			{m.content_coming_soon()}
		</div>
	{/each}
</div>
