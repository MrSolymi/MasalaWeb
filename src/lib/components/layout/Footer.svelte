<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { navRoutes } from '$lib/content/routes';
	import { restaurant } from '$lib/content/site';
	import { t } from '$lib/i18n';
	import emblem from '$lib/assets/res/brand/emblem.webp';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import PhoneIcon from '@lucide/svelte/icons/phone';
	import MailIcon from '@lucide/svelte/icons/mail';
	import ClockIcon from '@lucide/svelte/icons/clock';
</script>

<footer class="border-border/70 bg-muted/40 mt-20 border-t">
	<div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
		<div class="flex flex-col gap-3">
			<a
				href={resolve(localizeHref('/') as Pathname)}
				class="flex items-center gap-2.5 font-display text-lg font-bold text-primary"
			>
				<img src={emblem} alt="" width="36" height="36" class="h-9 w-9" />
				{m.site_name()}
			</a>
			<p class="max-w-xs text-sm text-muted-foreground">{m.home_hero_tagline()}</p>
		</div>

		<div class="flex flex-col gap-2 text-sm">
			<h2 class="mb-1 font-display text-base font-semibold">{m.nav_contact()}</h2>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- tel: link, not an app route -->
			<a
				href={restaurant.phoneHref}
				class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
			>
				<PhoneIcon class="size-4 shrink-0" />
				{restaurant.phone}
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto: link, not an app route -->
			<a
				href="mailto:{restaurant.email}"
				class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
			>
				<MailIcon class="size-4 shrink-0" />
				{restaurant.email}
			</a>
			<a
				href={restaurant.mapLinkHref}
				target="_blank"
				rel="noreferrer"
				class="flex items-start gap-2 text-muted-foreground transition-colors hover:text-primary"
			>
				<MapPinIcon class="mt-0.5 size-4 shrink-0" />
				<span>{t(restaurant.address).line1}, {t(restaurant.address).line2}</span>
			</a>
			<p class="flex items-center gap-2 text-muted-foreground">
				<ClockIcon class="size-4 shrink-0" />
				{m.footer_hours_value()}
			</p>
		</div>

		<div class="flex flex-col gap-2 text-sm">
			<h2 class="mb-1 font-display text-base font-semibold">{m.nav_home()}</h2>
			{#each navRoutes as route (route.path)}
				<a
					href={resolve(localizeHref(route.path) as Pathname)}
					class="text-muted-foreground transition-colors hover:text-primary"
				>
					{route.label()}
				</a>
			{/each}
		</div>
	</div>

	<div class="border-border/70 border-t">
		<div
			class="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6"
		>
			{m.site_name()} - {m.footer_rights()}
		</div>
	</div>
</footer>
