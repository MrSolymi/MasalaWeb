<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import CheckIcon from '@lucide/svelte/icons/check';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		value,
		label,
		...restProps
	}: WithoutChildrenOrChild<SelectPrimitive.ItemProps> = $props();
</script>

<SelectPrimitive.Item
	bind:ref
	{value}
	{label}
	data-slot="select-item"
	class={cn(
		'data-highlighted:bg-accent/60 data-highlighted:text-accent-foreground relative flex w-full cursor-pointer items-center justify-between gap-2 rounded-md py-2 pr-8 pl-3 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50',
		className
	)}
	{...restProps}
>
	{#snippet children({ selected })}
		{label ?? value}
		{#if selected}
			<span class="absolute right-2.5 flex items-center text-primary">
				<CheckIcon class="size-4" />
			</span>
		{/if}
	{/snippet}
</SelectPrimitive.Item>
