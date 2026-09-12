<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { restaurant } from '$lib/content/site';
	import { t } from '$lib/i18n';

	import PhoneIcon from '@lucide/svelte/icons/phone';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import woltIcon from '$lib/assets/res/brand/wolt-icon.png';
	import facebookIcon from '$lib/assets/res/brand/facebook-icon.svg';
	import instagramIcon from '$lib/assets/res/brand/instagram-icon.svg';

	let { data } = $props();
</script>

<Seo title={data.title} description={data.description} />

<div class="bg-muted/40 border-border/70 border-b py-14">
	<Container>
		<h1 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">{m.contact_title()}</h1>
		<p class="mt-3 max-w-2xl text-lg text-muted-foreground">{m.home_visit_body()}</p>
	</Container>
</div>

<Container class="grid gap-10 py-16 sm:py-20 md:grid-cols-2">
	<div class="flex flex-col gap-8">
		<dl class="flex flex-col gap-5">
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
					<PhoneIcon class="size-4.5" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_phone_label()}</dt>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- tel: link, not an app route -->
					<dd><a href={restaurant.phoneHref} class="text-lg font-semibold hover:text-primary">{restaurant.phone}</a></dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
					<MailIcon class="size-4.5" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_email_label()}</dt>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- mailto: link, not an app route -->
					<dd><a href="mailto:{restaurant.email}" class="text-lg font-semibold hover:text-primary">{restaurant.email}</a></dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
					<MapPinIcon class="size-4.5" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_address_label()}</dt>
					<dd class="text-lg font-semibold">{t(restaurant.address).line1}<br />{t(restaurant.address).line2}</dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
					<ClockIcon class="size-4.5" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_hours_label()}</dt>
					<dd class="text-lg font-semibold">{m.footer_hours_value()}</dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
					<img src={woltIcon} alt="" width="36" height="36" class="size-full object-cover" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_wolt_label()}</dt>
					<dd>
						<a
							href={restaurant.woltUrl}
							target="_blank"
							rel="noreferrer"
							class="text-lg font-semibold hover:text-primary"
						>
							{m.contact_wolt_cta()}
						</a>
					</dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
					<img src={facebookIcon} alt="" width="36" height="36" class="size-full object-cover" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_facebook_label()}</dt>
					<dd>
						<a
							href={restaurant.facebookUrl}
							target="_blank"
							rel="noreferrer"
							class="text-lg font-semibold hover:text-primary"
						>
							{m.contact_facebook_cta()}
						</a>
					</dd>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="mt-0.5 flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full">
					<img src={instagramIcon} alt="" width="36" height="36" class="size-full object-cover" />
				</span>
				<div>
					<dt class="text-sm text-muted-foreground">{m.contact_instagram_label()}</dt>
					<dd>
						<a
							href={restaurant.instagramUrl}
							target="_blank"
							rel="noreferrer"
							class="text-lg font-semibold hover:text-primary"
						>
							{m.contact_instagram_cta()}
						</a>
					</dd>
				</div>
			</div>
		</dl>

		<div class="rounded-2xl bg-primary p-6 text-primary-foreground">
			<h2 class="font-display text-xl font-bold">{m.contact_reservation_title()}</h2>
			<p class="mt-2 text-primary-foreground/85">{m.contact_reservation_body()}</p>
		</div>

		<div class="rounded-2xl border border-border bg-muted/40 p-6">
			<h2 class="flex items-center gap-2 font-display text-xl font-bold">
				<CreditCardIcon class="size-5 text-primary" />
				{m.payment_methods_title()}
			</h2>
			<p class="mt-2 text-muted-foreground">{m.payment_methods_body()}</p>
		</div>
	</div>

	<div class="flex flex-col gap-3">
		<h2 class="font-display text-xl font-bold">{m.contact_map_title()}</h2>
		<div class="overflow-hidden rounded-2xl border border-border">
			<iframe
				title={m.contact_map_title()}
				src={restaurant.mapEmbedSrc}
				class="h-80 w-full sm:h-full lg:h-136"
				loading="lazy"
			></iframe>
		</div>
		<Button href={restaurant.mapLinkHref} target="_blank" rel="noreferrer" variant="outline" class="w-fit">
			<MapPinIcon />
			{m.cta_get_directions()}
		</Button>
	</div>
</Container>
