<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	let { data } = $props();
</script>

<Seo title={data.title} description={data.description} />

<h1 class="mb-6 text-3xl font-bold tracking-tight">{m.menu_title()}</h1>
<Card.Root>
	<Card.Content class="py-16 text-center text-muted-foreground">
		{m.content_coming_soon()}
	</Card.Content>
</Card.Root>
