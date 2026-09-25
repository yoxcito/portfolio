<script lang="ts">

	import './layout.css';
	import { base } from '$app/paths';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/memoji.avif`} />
</svelte:head>

<Nav />
<main class="pt-16">
	{@render children()}
</main>
