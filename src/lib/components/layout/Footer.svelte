<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { restaurant } from '$lib/content/site';
</script>

<footer class="mt-16 border-t">
	<div
		class="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
	>
		<p>{m.site_name()} &mdash; {m.footer_rights()}</p>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- tel: link, not an app route -->
		<a href={restaurant.phoneHref} class="transition-colors hover:text-foreground">
			{m.contact_phone_placeholder()}
		</a>
	</div>
</footer>
