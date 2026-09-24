<script lang="ts">
	import { formatDate } from '$lib/blog';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Mukund</title>
	<meta name="description" content="Thoughts on design, development, and the things between." />
</svelte:head>

<section class="mx-auto max-w-2xl px-6 pt-6 pb-16">
	<div class="animate-fade-up">
		<h1 class="sc text-xs tracking-widest text-muted mb-2">Blog</h1>
		<p class="heading-serif text-3xl sm:text-4xl">
			Thoughts & notes
		</p>
		<p class="mt-4 text-muted text-sm max-w-sm">
			Occasional writing on things I find interesting — design, code, and everything in between.
		</p>
	</div>

	<hr class="my-10" />

	{#if data.posts.length === 0}
		<p class="text-muted text-sm">No posts yet. Check back soon.</p>
	{:else}
		<div class="space-y-10 animate-fade-up-delay-1">
			{#each data.posts as post}
				<a href="/blog/{post.slug}" class="group block hover:opacity-100">
					<article class="flex flex-col sm:flex-row gap-5">
						{#if post.cover}
							<div class="sm:w-40 sm:h-28 w-full h-48 flex-shrink-0 overflow-hidden rounded">
								<img
									src={post.cover}
									alt={post.title}
									class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
								/>
							</div>
						{/if}
						<div class="flex flex-col justify-center">
							<div class="flex items-center gap-3 mb-1.5">
								<span class="text-xs text-muted tracking-wide">{formatDate(post.date)}</span>
								<span class="text-border">·</span>
								<span class="text-xs text-muted tracking-wide">{post.readingTime} min read</span>
							</div>
							<h2 class="heading-serif text-xl group-hover:translate-x-1 transition-transform duration-300">
								{post.title}
							</h2>
							<p class="mt-1 text-sm text-muted line-clamp-2">{post.description}</p>
							{#if post.tags.length > 0}
								<div class="mt-2 flex gap-2">
									{#each post.tags as tag}
										<span class="sc text-[10px] tracking-wider text-muted border border-border px-2 py-0.5 rounded-full">
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					</article>
				</a>
			{/each}
		</div>
	{/if}
</section>
