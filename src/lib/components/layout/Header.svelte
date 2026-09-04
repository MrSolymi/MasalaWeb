<script lang="ts">
	import type { Pathname } from '$app/types';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { navRoutes } from '$lib/content/routes';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import emblem from '$lib/assets/res/brand/emblem.webp';

	let mobileOpen = $state(false);

	function isActive(path: string) {
		const delocalized = page.url.pathname.replace(/^\/(en|hu)/, '') || '/';
		return delocalized === path;
	}
</script>

<header
	class="border-border/70 bg-background/95 sticky top-0 z-40 border-b backdrop-blur supports-backdrop-filter:bg-background/80"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
		<a
			href={resolve(localizeHref('/') as Pathname)}
			class="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-primary"
		>
			<img src={emblem} alt="" width="40" height="40" class="h-10 w-10" />
			{m.site_name()}
		</a>

		<nav class="hidden items-center gap-7 text-sm font-medium md:flex">
			{#each navRoutes as route (route.path)}
				<a
					href={resolve(localizeHref(route.path) as Pathname)}
					class="text-foreground/70 relative py-1 transition-colors hover:text-primary aria-[current=page]:text-primary"
					aria-current={isActive(route.path) ? 'page' : undefined}
				>
					{route.label()}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 md:flex">
			<LanguageSwitcher />
			<Button href={resolve(localizeHref('/contact') as Pathname)} size="sm">{m.cta_call_now()}</Button>
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
					<Sheet.Title class="font-display text-primary">{m.site_name()}</Sheet.Title>
				</Sheet.Header>
				<nav class="flex flex-col gap-4 px-4 text-base font-medium">
					{#each navRoutes as route (route.path)}
						<a
							href={resolve(localizeHref(route.path) as Pathname)}
							onclick={() => (mobileOpen = false)}
							aria-current={isActive(route.path) ? 'page' : undefined}
							class="aria-[current=page]:text-primary"
						>
							{route.label()}
						</a>
					{/each}
				</nav>
				<Sheet.Footer class="flex-col items-stretch gap-3">
					<LanguageSwitcher />
					<Button href={resolve(localizeHref('/contact') as Pathname)} onclick={() => (mobileOpen = false)}>
						{m.cta_call_now()}
					</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</header>
