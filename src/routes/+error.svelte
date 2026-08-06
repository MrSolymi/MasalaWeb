<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section class="flex flex-col items-start gap-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight">{m.not_found_title()}</h1>
	<p class="text-muted-foreground">{m.not_found_body()}</p>
	<Button href={resolve(localizeHref('/') as Pathname)}>{m.not_found_home_link()}</Button>
</section>
