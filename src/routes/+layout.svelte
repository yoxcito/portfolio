<script module lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/portfolio/memoji.png" />
</svelte:head>

<Nav />
<main class="pt-16">
	{@render children()}
</main>
