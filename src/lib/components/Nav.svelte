<script lang="ts">
	import { page } from '$app/state';
	import { asset, resolve } from '$app/paths';
	import { theme } from '$lib/theme';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' }
	];

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-colors duration-300">
	<div class="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-3 hover:opacity-100">
			<img src={asset('/memoji.png')} alt="Logo" class="h-8 w-8 rounded-full" />
			<span class="font-display text-lg font-medium tracking-wide">Mukund</span>
		</a>

		<div class="flex items-center gap-6">
			{#each links as link (link.href)}
				<a
					href={resolve(link.href)}
					class="sc text-sm transition-opacity duration-200 {isActive(link.href)
						? 'font-medium opacity-100'
						: 'opacity-50 hover:opacity-80'}"
				>
					{link.label}
				</a>
			{/each}

			<!-- Theme toggle -->
			<button
				onclick={() => theme.toggle()}
				class="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-200 hover:bg-surface hover:opacity-100"
				aria-label="Toggle theme"
			>
				{#if $theme === 'light'}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</nav>
