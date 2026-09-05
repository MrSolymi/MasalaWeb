<script lang="ts">
	import type { MenuItem } from '$lib/content/menu';
	import { formatPrice } from '$lib/content/menu';
	import { t } from '$lib/i18n';
	import { cn } from '$lib/utils.js';
	import AllergenIcons from './AllergenIcons.svelte';

	let { item, highlighted = false }: { item: MenuItem; highlighted?: boolean } = $props();
</script>

<article
	id={item.id}
	class={cn(
		'border-border/60 scroll-mt-40 flex gap-4 rounded-xl border-b py-5 outline-2 outline-offset-4 transition-[outline-color] duration-500 last:border-0',
		highlighted ? 'outline-primary' : 'outline-transparent'
	)}
>
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
