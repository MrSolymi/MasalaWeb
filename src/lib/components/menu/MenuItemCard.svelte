<script lang="ts">
	import type { MenuItem } from '$lib/content/menu';
	import { formatPrice } from '$lib/content/menu';
	import { t } from '$lib/i18n';
	import AllergenIcons from './AllergenIcons.svelte';

	let { item }: { item: MenuItem } = $props();
</script>

<article class="border-border/60 flex gap-4 border-b py-5 last:border-0">
	{#if item.image}
		<div class="size-20 shrink-0 rounded-xl bg-muted p-1.5 sm:size-24">
			<img
				src={item.image}
				alt=""
				loading="lazy"
				decoding="async"
				class="size-full object-contain"
			/>
		</div>
	{/if}
	<div class="min-w-0 flex-1">
		<div class="flex items-baseline justify-between gap-3">
			<h3 class="font-display leading-snug font-semibold">{t(item.name)}</h3>
			<span class="shrink-0 font-display font-semibold text-primary">
				{formatPrice(item.price)}{item.priceNote ? ` · ${item.priceNote}` : ''}
			</span>
		</div>
		{#if item.description}
			<p class="mt-1 text-sm text-muted-foreground">{t(item.description)}</p>
		{/if}
		{#if item.allergens?.length}
			<div class="mt-2">
				<AllergenIcons allergens={item.allergens} />
			</div>
		{/if}
	</div>
</article>
