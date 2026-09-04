<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { restaurant } from '$lib/content/site';
	import { findMenuItem, formatPrice } from '$lib/content/menu';
	import { t } from '$lib/i18n';

	import UsersIcon from '@lucide/svelte/icons/users';
	import TreesIcon from '@lucide/svelte/icons/trees';
	import CarIcon from '@lucide/svelte/icons/car';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import ClockIcon from '@lucide/svelte/icons/clock';

	let { data } = $props();

	const highlightIcons = { users: UsersIcon, trees: TreesIcon, car: CarIcon };
	const popularDishes = restaurant.popularDishIds
		.map((id) => findMenuItem(id))
		.filter((dish) => dish !== undefined);
</script>

<Seo title={data.title} description={data.description} />

<section class="relative flex min-h-136 items-center overflow-hidden bg-foreground text-background sm:min-h-152">
	<enhanced:img
		src="../lib/assets/res/gallery/interior-05.webp"
		alt=""
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div
		class="absolute inset-0 -z-10 bg-linear-to-t from-foreground via-foreground/70 to-foreground/30"
	></div>
	<Container class="py-20">
		<div class="flex max-w-xl flex-col items-start gap-5">
			<span class="text-sm font-semibold tracking-wide text-accent uppercase">
				Pakistani &amp; Indian Restaurant · Debrecen
			</span>
			<h1 class="font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl">
				{m.site_name()}
			</h1>
			<p class="text-lg text-background/85 text-balance">{m.home_hero_tagline()}</p>
			<div class="mt-2 flex flex-wrap gap-3">
				<Button href={resolve(localizeHref('/menu') as Pathname)} size="lg">
					{m.cta_view_menu()}
					<ArrowRightIcon />
				</Button>
				<Button
					href={resolve(localizeHref('/contact') as Pathname)}
					size="lg"
					variant="outline"
					class="border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background"
				>
					{m.cta_call_now()}
				</Button>
			</div>
		</div>
	</Container>
</section>

<section class="border-border/70 border-b bg-muted/40 py-10">
	<Container>
		<ul class="grid grid-cols-3 gap-6">
			{#each restaurant.highlights as highlight (highlight.icon)}
				{@const Icon = highlightIcons[highlight.icon as keyof typeof highlightIcons]}
				<li class="flex flex-col items-center gap-2 text-center">
					<span class="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
						<Icon class="size-6" />
					</span>
					<span class="text-sm font-medium">{t(highlight.label)}</span>
				</li>
			{/each}
		</ul>
	</Container>
</section>

<section class="py-16 sm:py-20">
	<Container class="flex flex-col gap-10">
		<SectionHeading
			kicker={m.nav_menu()}
			title={m.home_popular_title()}
			subtitle={m.home_popular_subtitle()}
		/>
		<div class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
			{#each popularDishes as dish (dish.id)}
				<a
					href={resolve(localizeHref('/menu') as Pathname) + `#${dish.id}`}
					class="group flex flex-col gap-3"
				>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted p-3">
						{#if dish.image}
							<img
								src={dish.image}
								alt=""
								loading="lazy"
								decoding="async"
								class="size-full object-contain transition-transform duration-300 group-hover:scale-105"
							/>
						{/if}
					</div>
					<div>
						<h3 class="font-display leading-snug font-semibold group-hover:text-primary">
							{t(dish.name)}
						</h3>
						<p class="text-sm text-muted-foreground">{formatPrice(dish.price)}</p>
					</div>
				</a>
			{/each}
		</div>
		<Button
			href={resolve(localizeHref('/menu') as Pathname)}
			variant="outline"
			size="lg"
			class="w-fit"
		>
			{m.cta_view_menu()}
			<ArrowRightIcon />
		</Button>
	</Container>
</section>

<section class="bg-muted/40 py-16 sm:py-20">
	<Container class="grid items-center gap-10 md:grid-cols-2">
		<enhanced:img
			src="../lib/assets/res/gallery/interior-08.webp"
			alt=""
			class="h-72 w-full rounded-2xl object-cover sm:h-96"
		/>
		<div class="flex flex-col items-start gap-4">
			<SectionHeading kicker={m.nav_about()} title={m.home_about_title()} />
			<p class="text-muted-foreground">{m.home_about_body()}</p>
			<Button href={resolve(localizeHref('/about') as Pathname)} variant="outline">
				{m.home_about_cta()}
				<ArrowRightIcon />
			</Button>
		</div>
	</Container>
</section>

<section class="py-16 sm:py-20">
	<Container>
		<div class="flex flex-col items-start gap-6 rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12">
			<div class="flex flex-col gap-3">
				<h2 class="font-display text-2xl font-bold sm:text-3xl">{m.home_visit_title()}</h2>
				<p class="max-w-md text-primary-foreground/85">{m.home_visit_body()}</p>
				<div class="mt-1 flex flex-col gap-1.5 text-sm text-primary-foreground/85">
					<span class="flex items-center gap-2">
						<MapPinIcon class="size-4 shrink-0" />
						{t(restaurant.address).line1}, {t(restaurant.address).line2}
					</span>
					<span class="flex items-center gap-2">
						<ClockIcon class="size-4 shrink-0" />
						{m.footer_hours_value()}
					</span>
				</div>
			</div>
			<div class="flex shrink-0 flex-wrap gap-3">
				<Button
					href={resolve(localizeHref('/contact') as Pathname)}
					size="lg"
					variant="secondary"
				>
					{m.cta_get_directions()}
				</Button>
				<Button
					href={resolve(localizeHref('/contact') as Pathname)}
					size="lg"
					variant="outline"
					class="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
				>
					{m.cta_call_now()}
				</Button>
			</div>
		</div>
	</Container>
</section>
