<script lang="ts">
	import { resolve } from '$app/paths';
	import { formatDate } from '$lib/blog';
	import { onMount } from 'svelte';

	let { data } = $props();
	let tocOpen = $state(false);
	let activeId = $state('');

	onMount(() => {
		// Intersection observer to track active heading
		const headingElements = document.querySelectorAll('.prose-mono h2[id], .prose-mono h3[id]');
		if (headingElements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{
				rootMargin: '-80px 0px -70% 0px',
				threshold: 0
			}
		);

		headingElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});

	function scrollToHeading(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			tocOpen = false;
		}
	}
</script>

<svelte:head>
	<title>{data.title} — Mukund</title>
	<meta name="description" content={data.description} />
	{#if data.cover}
		<meta property="og:image" content={data.cover} />
	{/if}
</svelte:head>

<div class="mx-auto max-w-5xl px-6 pt-6 pb-16">
	<div class="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">

		<!-- TOC sidebar (desktop) -->
		{#if data.headings.length > 0}
			<aside class="hidden lg:block">
				<div class="sticky top-24">
					<p class="text-xs font-semibold tracking-widest text-fg uppercase mb-4">Contents</p>
					<nav class="relative flex flex-col gap-1">
						<!-- Vertical track bar -->
						<div class="absolute left-0 top-0 bottom-0 w-[2px] bg-border rounded-full"></div>

						{#each data.headings as heading}
							{@const isActive = activeId === heading.id}
							<button
								onclick={() => scrollToHeading(heading.id)}
								class="toc-link relative text-left text-[13px] py-1 transition-all duration-200 {heading.level === 3 ? 'pl-5' : 'pl-4'} {isActive ? 'text-fg font-medium opacity-100' : 'text-muted opacity-50 hover:opacity-80'}"
							>
								<!-- Active indicator -->
								{#if isActive}
									<span class="absolute left-0 top-1 bottom-1 w-[2px] bg-fg rounded-full transition-all duration-300"></span>
								{/if}
								{heading.text}
							</button>
						{/each}
					</nav>
				</div>
			</aside>
		{/if}

		<!-- Main article -->
		<article class="max-w-2xl">
			<!-- Mobile TOC toggle -->
			{#if data.headings.length > 0}
				<div class="lg:hidden mb-6">
					<button
						onclick={() => (tocOpen = !tocOpen)}
						class="flex items-center gap-2 text-xs font-semibold tracking-widest text-fg uppercase border border-border px-3 py-2 rounded transition-all duration-200 hover:bg-surface hover:opacity-100"
						aria-label="Toggle table of contents"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="12" x2="15" y2="12"></line>
							<line x1="3" y1="18" x2="12" y2="18"></line>
						</svg>
						Contents
					</button>

					{#if tocOpen}
						<nav class="relative mt-3 flex flex-col gap-1 pl-4 animate-fade-up">
							<div class="absolute left-0 top-0 bottom-0 w-[2px] bg-border rounded-full"></div>
							{#each data.headings as heading}
								{@const isActive = activeId === heading.id}
								<button
									onclick={() => scrollToHeading(heading.id)}
									class="toc-link relative text-left text-[13px] py-1 transition-all duration-200 {heading.level === 3 ? 'pl-4' : 'pl-3'} {isActive ? 'text-fg font-medium opacity-100' : 'text-muted opacity-50 hover:opacity-80'}"
								>
									{#if isActive}
										<span class="absolute left-0 top-1 bottom-1 w-[2px] bg-fg rounded-full"></span>
									{/if}
									{heading.text}
								</button>
							{/each}
						</nav>
					{/if}
				</div>
			{/if}

			<!-- Header -->
			<header class="mb-10 animate-fade-up">
				<a href={resolve('/blog')} class="sc text-xs text-muted tracking-wider hover:text-fg hover:opacity-100 transition-colors duration-200 mb-6 inline-block">
					&larr; Back to blog
				</a>

				<div class="flex items-center gap-3 mb-4">
					<span class="text-xs text-muted tracking-wide">{formatDate(data.date)}</span>
					<span class="text-border">·</span>
					<span class="text-xs text-muted tracking-wide">{data.readingTime} min read</span>
				</div>

				<h1 class="heading-serif text-3xl sm:text-4xl leading-tight">{data.title}</h1>

				{#if data.tags.length > 0}
					<div class="mt-4 flex gap-2 flex-wrap">
						{#each data.tags as tag}
							<span class="sc text-[10px] tracking-wider text-muted border border-border px-2 py-0.5 rounded-full">
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</header>

			<!-- Cover image -->
			{#if data.cover}
				<div class="mb-10 overflow-hidden rounded animate-fade-up-delay-1">
					<img
						src={data.cover}
						alt={data.title}
						class="w-full object-cover max-h-[400px]"
					/>
				</div>
			{/if}

			<!-- Content -->
			<div class="prose prose-mono prose-lg max-w-none animate-fade-up-delay-2">
				<data.component />
			</div>

			<!-- Back link -->
			<hr class="my-14" />
			<div class="text-center animate-fade-up-delay-3">
				<a href={resolve('/blog')} class="sc text-xs text-muted tracking-wider hover:text-fg hover:opacity-100 transition-colors duration-200">
					&larr; All posts
				</a>
			</div>
		</article>
	</div>
</div>
