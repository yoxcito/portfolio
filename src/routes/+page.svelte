<svelte:head>
	<title>Mukund — Portfolio</title>
	<meta name="description" content="Designer, developer, & occasional writer." />
</svelte:head>

<script>
	import { asset, resolve } from '$app/paths';
</script>

<section class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col justify-center px-6">
	<div class="animate-fade-up">
		<img
			src={asset('/memoji.avif')}
			alt="Memoji avatar"
			class="mb-8 h-20 w-20 rounded-full border border-border"
		/>
	</div>

	<h1 class="heading-serif text-4xl sm:text-5xl leading-tight animate-fade-up-delay-1">
		Designer, developer,<br />
		<span class="text-muted">& occasional writer.</span>
	</h1>

	<p class="mt-6 max-w-md text-muted leading-relaxed animate-fade-up-delay-2">
		I build thoughtful digital experiences with care for craft, clarity, and quiet detail. Currently
		exploring the space between design and engineering.
	</p>

	<!-- <div class="mt-10 flex flex-wrap items-center gap-4 animate-fade-up-delay-3">
		<a
			// eslint-disable-next-line svelte/no-navigation-without-resolve
			href={resolve('/blog')}
			class="sc inline-flex items-center gap-2 border border-fg px-5 py-2.5 text-xs tracking-wider text-fg transition-all duration-200 hover:bg-fg hover:text-bg hover:opacity-100"
		>
			Read the blog
		</a>
	</div> -->
	<div class="mt-10 flex flex-wrap items-center gap-4 animate-fade-up-delay-3">
		<a
			href={resolve('/blog')}
			class="inline-flex items-center gap-2 border border-fg px-5 py-2.5 text-xs tracking-wider text-fg transition-colors duration-200 hover:text-white  dark:hover:text-black"
		>
			Read the blog
		</a>
	</div>

	<!-- Social links -->
	<div class="mt-8 flex items-center gap-3 animate-fade-up-delay-3">
		<a
			href="https://github.com/yoxcito"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-fg hover:border-fg hover:opacity-100"
			aria-label="GitHub"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
			</svg>
		</a>
		<a
			href="https://x.com/yoxcito"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-fg hover:border-fg hover:opacity-100"
			aria-label="X (Twitter)"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
			</svg>
		</a>
		<a
			href="https://www.linkedin.com/in/mukund-kumar-singh-567383343/"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-fg hover:border-fg hover:opacity-100"
			aria-label="LinkedIn"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
			</svg>
		</a>
		<a
			href="https://t.me/mukundx"
			target="_blank"
			rel="noopener noreferrer"
			class="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-fg hover:border-fg hover:opacity-100"
			aria-label="Telegram"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
				<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
			</svg>
		</a>
	</div>
</section>
