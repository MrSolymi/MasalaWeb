<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { restaurant } from '$lib/content/site';

	let { data } = $props();
</script>

<Seo title={data.title} description={data.description} />

<h1 class="mb-6 text-3xl font-bold tracking-tight">{m.contact_title()}</h1>

<Card.Root>
	<Card.Content class="flex flex-col gap-6 py-8">
		<div>
			<p class="text-sm text-muted-foreground">{m.contact_phone_label()}</p>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- tel: link, not an app route -->
			<a href={restaurant.phoneHref} class="text-2xl font-semibold hover:underline">
				{m.contact_phone_placeholder()}
			</a>
		</div>
		<div>
			<p class="text-sm text-muted-foreground">{m.contact_address_label()}</p>
			<p class="text-lg">{m.contact_address_placeholder()}</p>
		</div>
		<Button href={restaurant.phoneHref} size="lg" class="w-fit">
			{m.cta_call_now()}
		</Button>
		<!-- Replace with an embedded map once the real address is known. -->
	</Card.Content>
</Card.Root>
