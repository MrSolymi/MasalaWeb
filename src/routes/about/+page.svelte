<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { restaurant } from '$lib/content/site';
	import { findMenuItem } from '$lib/content/menu';
	import { t } from '$lib/i18n';

	import UsersIcon from '@lucide/svelte/icons/users';
	import TreesIcon from '@lucide/svelte/icons/trees';
	import CarIcon from '@lucide/svelte/icons/car';

	let { data } = $props();

	const highlightIcons = { users: UsersIcon, trees: TreesIcon, car: CarIcon };
	const popularDishes = restaurant.popularDishIds
		.map((id) => findMenuItem(id))
		.filter((dish) => dish !== undefined);
</script>

<Seo title={data.title} description={data.description} />

<div class="bg-muted/40 border-border/70 border-b py-14">
	<Container>
		<span class="text-sm font-semibold tracking-wide text-primary uppercase">{m.nav_about()}</span>
		<h1 class="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
			{m.about_welcome_title()}
		</h1>
		<p class="mt-4 max-w-2xl text-lg text-muted-foreground">{m.about_body_1()}</p>
	</Container>
</div>

<Container class="flex flex-col gap-16 py-16 sm:py-20">
	<section class="grid items-center gap-10 md:grid-cols-2">
		<div class="order-2 flex flex-col gap-4 md:order-1">
			<p class="text-muted-foreground">{m.about_body_2()}</p>
			<ul class="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-1">
				{#each restaurant.highlights as highlight (highlight.icon)}
					{@const Icon = highlightIcons[highlight.icon as keyof typeof highlightIcons]}
					<li class="flex items-center gap-2.5 text-sm font-medium">
						<span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
							<Icon class="size-4.5" />
						</span>
						{t(highlight.label)}
					</li>
				{/each}
			</ul>
		</div>
		<enhanced:img
			src="../../lib/assets/res/gallery/interior-06.webp"
			alt=""
			class="order-1 h-64 w-full rounded-2xl object-cover sm:h-80 md:order-2"
		/>
	</section>

	<section class="grid items-center gap-10 md:grid-cols-2">
		<enhanced:img
			src="../../lib/assets/res/gallery/interior-03.webp"
			alt=""
			class="h-64 w-full rounded-2xl object-cover sm:h-80"
		/>
		<div class="flex flex-col gap-4">
			<h2 class="font-display text-2xl font-bold">{m.nav_menu()} &amp; {m.home_popular_title()}</h2>
			<p class="text-muted-foreground">{m.about_body_3()}</p>
			<ul class="flex flex-wrap gap-2 text-sm">
				{#each popularDishes as dish (dish.id)}
					<li class="rounded-full border border-border px-3 py-1 font-medium">{t(dish.name)}</li>
				{/each}
			</ul>
		</div>
	</section>

	<SectionHeading title={m.about_closing()} align="center" class="mx-auto max-w-2xl" />
</Container>
