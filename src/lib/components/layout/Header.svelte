<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { navRoutes } from '$lib/content/routes';
	import { restaurant } from '$lib/content/site';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';

	let mobileOpen = $state(false);
</script>

<header class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
	<div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
		<a href={resolve(localizeHref('/') as Pathname)} class="font-semibold">
			{m.site_name()}
		</a>

		<nav class="hidden items-center gap-6 text-sm font-medium md:flex">
			{#each navRoutes as route (route.path)}
				<a
					href={resolve(localizeHref(route.path) as Pathname)}
					class="text-muted-foreground transition-colors hover:text-foreground"
				>
					{route.label()}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<LanguageSwitcher />
			<Button href={restaurant.phoneHref} size="sm">{m.cta_call_now()}</Button>
		</div>

		<Sheet.Root bind:open={mobileOpen}>
			<Sheet.Trigger class="md:hidden">
				{#snippet child({ props })}
					<Button {...props} variant="ghost" size="icon">
						<MenuIcon />
						<span class="sr-only">Menu</span>
					</Button>
				{/snippet}
			</Sheet.Trigger>
			<Sheet.Content side="right">
				<Sheet.Header>
					<Sheet.Title>{m.site_name()}</Sheet.Title>
				</Sheet.Header>
				<nav class="flex flex-col gap-4 px-4 text-base font-medium">
					{#each navRoutes as route (route.path)}
						<a
							href={resolve(localizeHref(route.path) as Pathname)}
							onclick={() => (mobileOpen = false)}
						>
							{route.label()}
						</a>
					{/each}
				</nav>
				<Sheet.Footer class="flex-col items-stretch gap-3">
					<LanguageSwitcher />
					<Button href={restaurant.phoneHref}>{m.cta_call_now()}</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</header>
