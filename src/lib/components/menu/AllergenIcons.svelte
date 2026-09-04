<script lang="ts">
	import type { Allergen } from '$lib/content/menu';
	import { allergenLabels } from '$lib/content/menu';
	import { t } from '$lib/i18n';
	import WheatIcon from '@lucide/svelte/icons/wheat';
	import MilkIcon from '@lucide/svelte/icons/milk';
	import NutIcon from '@lucide/svelte/icons/nut';
	import BeanIcon from '@lucide/svelte/icons/bean';

	let { allergens }: { allergens: Allergen[] } = $props();

	const icons = { gluten: WheatIcon, lactose: MilkIcon, nuts: NutIcon, legumes: BeanIcon };
</script>

{#if allergens.length}
	<span class="inline-flex items-center gap-1.5">
		{#each allergens as allergen (allergen)}
			{@const Icon = icons[allergen]}
			<span title={t(allergenLabels[allergen])} class="text-muted-foreground/80">
				<Icon class="size-4" />
			</span>
		{/each}
	</span>
{/if}
