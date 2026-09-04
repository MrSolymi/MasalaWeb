<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		kicker,
		title,
		subtitle,
		align = 'left',
		class: className = ''
	}: {
		kicker?: string;
		title: string;
		subtitle?: string;
		align?: 'left' | 'center';
		class?: string;
	} = $props();
</script>

<div class={cn('flex flex-col gap-2', align === 'center' && 'items-center text-center', className)}>
	{#if kicker}
		<span class="text-sm font-semibold tracking-wide text-primary uppercase">{kicker}</span>
	{/if}
	<h2 class="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
	{#if subtitle}
		<p class="max-w-2xl text-muted-foreground">{subtitle}</p>
	{/if}
	<div class={cn('divider-flourish mt-1 w-24', align === 'center' && 'w-24')} aria-hidden="true">
		<span class="text-accent">✦</span>
	</div>
</div>
