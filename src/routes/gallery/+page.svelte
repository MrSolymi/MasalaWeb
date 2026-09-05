<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Seo from '$lib/components/seo/Seo.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import { galleryPhotos } from '$lib/content/gallery';
	import { t } from '$lib/i18n';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import XIcon from '@lucide/svelte/icons/x';

	let { data } = $props();

	let dialogEl: HTMLDialogElement | undefined = $state();
	let activeIndex = $state(0);

	function open(index: number) {
		activeIndex = index;
		dialogEl?.showModal();
	}

	function next() {
		activeIndex = (activeIndex + 1) % galleryPhotos.length;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') next();
		if (event.key === 'ArrowLeft') prev();
	}
</script>

<Seo title={data.title} description={data.description} />

<div class="bg-muted/40 border-border/70 border-b py-14">
	<Container>
		<h1 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">{m.gallery_title()}</h1>
		<p class="mt-3 max-w-2xl text-lg text-muted-foreground">{m.gallery_intro()}</p>
	</Container>
</div>

<Container class="py-12">
	<div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
		{#each galleryPhotos as photo, i (i)}
			<button
				type="button"
				onclick={() => open(i)}
				aria-label={t(photo.alt)}
				class="group aspect-4/3 overflow-hidden rounded-xl bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
			>
				<enhanced:img
					src={photo.src}
					alt={t(photo.alt)}
					class="size-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</button>
		{/each}
	</div>
</Container>

<dialog
	bind:this={dialogEl}
	onkeydown={onKeydown}
	class="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-foreground/90"
>
	<div class="relative flex h-screen w-screen items-center justify-center p-4">
		<button
			type="button"
			onclick={() => dialogEl?.close()}
			class="absolute top-4 right-4 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20"
			aria-label="Close"
		>
			<XIcon />
		</button>
		<button
			type="button"
			onclick={prev}
			class="absolute left-2 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20 sm:left-4"
			aria-label="Previous photo"
		>
			<ChevronLeftIcon />
		</button>
		{#if galleryPhotos[activeIndex]}
			<enhanced:img
				src={galleryPhotos[activeIndex].src}
				alt={t(galleryPhotos[activeIndex].alt)}
				class="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
			/>
		{/if}
		<button
			type="button"
			onclick={next}
			class="absolute right-2 rounded-full bg-background/10 p-2 text-background transition-colors hover:bg-background/20 sm:right-4"
			aria-label="Next photo"
		>
			<ChevronRightIcon />
		</button>
	</div>
</dialog>
