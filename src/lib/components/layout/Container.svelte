<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = '',
		children
	}: { class?: string; children: Snippet } = $props();
</script>

<div class={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>
	{@render children()}
</div>
