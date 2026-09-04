<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import MenuItemCard from '$lib/components/menu/MenuItemCard.svelte';
	import AllergenIcons from '$lib/components/menu/AllergenIcons.svelte';
	import { menuCategories, lunchMenu, drinksMenu, allergenLabels, formatPrice } from '$lib/content/menu';
	import { t } from '$lib/i18n';

	let { data } = $props();

	const allergenList = Object.keys(allergenLabels) as (keyof typeof allergenLabels)[];
</script>

<Seo title={data.title} description={data.description} />

<div class="bg-muted/40 border-border/70 border-b py-14">
	<Container class="flex flex-col gap-4">
		<h1 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">{m.menu_title()}</h1>
		<p class="max-w-2xl text-lg text-muted-foreground">{m.menu_intro()}</p>
	</Container>
</div>

<nav
	aria-label={m.menu_jump_label()}
	class="border-border/70 bg-background/95 sticky top-16 z-30 border-b backdrop-blur"
>
	<Container>
		<div class="scrollbar-none flex gap-2 overflow-x-auto py-3">
			<a
				href="#lunch"
				class="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:border-primary hover:text-primary"
			>
				{m.menu_lunch_title()}
			</a>
			{#each menuCategories as category (category.id)}
				<a
					href="#{category.id}"
					class="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:border-primary hover:text-primary"
				>
					{t(category.name)}
				</a>
			{/each}
			<a
				href="#drinks"
				class="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors hover:border-primary hover:text-primary"
			>
				{m.menu_drinks_title()}
			</a>
		</div>
	</Container>
</nav>

<Container class="flex flex-col gap-16 py-12">
	<section id="lunch" class="scroll-mt-32 rounded-2xl border border-accent/40 bg-accent/10 p-6 sm:p-8">
		<div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
			<h2 class="font-display text-2xl font-bold">{m.menu_lunch_title()}</h2>
			<span class="font-display text-xl font-semibold text-primary">
				{formatPrice(lunchMenu.price)} <span class="text-sm font-normal text-muted-foreground">/ {m.menu_lunch_price()}</span>
			</span>
		</div>
		<p class="mt-1 text-sm text-muted-foreground">
			{m.menu_lunch_subtitle()}
		</p>
		<div class="mt-6 overflow-x-auto">
			<table class="w-full min-w-140 border-collapse text-sm">
				<thead>
					<tr class="border-b border-accent/40 text-left text-muted-foreground">
						<th class="py-2 pr-4 font-medium">{m.menu_lunch_day()}</th>
						<th class="py-2 pr-4 font-medium">{m.menu_lunch_soup()}</th>
						<th class="py-2 pr-4 font-medium">{m.menu_lunch_vegetarian()}</th>
						<th class="py-2 font-medium">{m.menu_lunch_chicken()}</th>
					</tr>
				</thead>
				<tbody>
					{#each lunchMenu.days as day (day.day.en)}
						<tr class="border-b border-accent/20 last:border-0">
							<td class="py-2.5 pr-4 font-display font-semibold">{t(day.day)}</td>
							<td class="py-2.5 pr-4">{t(day.soup)}</td>
							<td class="py-2.5 pr-4">{t(day.vegetarian)}</td>
							<td class="py-2.5">{t(day.chicken)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-4 text-xs text-muted-foreground">{t(lunchMenu.note)}</p>
	</section>

	{#each menuCategories as category (category.id)}
		<section id={category.id} class="scroll-mt-32">
			<SectionHeading title={t(category.name)} />
			{#if category.image}
				<div class="mt-6 w-full max-w-md rounded-xl bg-muted p-4">
					<img
						src={category.image}
						alt=""
						loading="lazy"
						decoding="async"
						class="h-auto w-full object-contain"
					/>
				</div>
			{/if}
			<div class="mt-4">
				{#each category.items as item (item.id)}
					<MenuItemCard {item} />
				{/each}
			</div>
		</section>
	{/each}

	<section id="drinks" class="scroll-mt-32">
		<SectionHeading title={m.menu_drinks_title()} />
		<div class="mt-6 grid gap-10 sm:grid-cols-2">
			{#each drinksMenu as group (group.id)}
				<div>
					<h3 class="font-display text-lg font-semibold">{t(group.name)}</h3>
					<ul class="border-border/60 mt-2 divide-y divide-border/60 border-t">
						{#each group.items as drink (drink.name.en)}
							<li class="flex items-baseline justify-between gap-3 py-2 text-sm">
								<span
									>{t(drink.name)}{#if drink.size}<span class="text-muted-foreground"
											>&nbsp;({drink.size})</span
										>{/if}</span
								>
								<span class="shrink-0 font-medium text-primary">{formatPrice(drink.price)}</span>
							</li>
						{/each}
					</ul>
					{#if group.note}
						<p class="mt-2 text-xs text-muted-foreground">{t(group.note)}</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section class="border-border/70 border-t pt-8">
		<h2 class="font-display text-lg font-semibold">{m.menu_allergens_title()}</h2>
		<p class="mt-2 max-w-2xl text-sm text-muted-foreground">{m.menu_allergens_note()}</p>
		<ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
			{#each allergenList as allergen (allergen)}
				<li class="flex items-center gap-2">
					<AllergenIcons allergens={[allergen]} />
					{t(allergenLabels[allergen])}
				</li>
			{/each}
		</ul>
	</section>
</Container>
