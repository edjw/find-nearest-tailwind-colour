<script>
	import { page } from '$app/stores';

	import TailwindVersionHelp from './TailwindVersionHelp.svelte';
	export let tailwindVersion = ''; // Can be v3.3+, v3.2 or v2

	let dialog;
</script>

<header class="p-4 mt-1 -ml-4 -mr-4 bg-cyan-800 sm:rounded">
	<h1 class="leading-none text-cyan-50">
		Find the nearest Tailwind {tailwindVersion !== 'v3.3+' ? tailwindVersion : ''} colour
	</h1>

	<TailwindVersionHelp bind:dialog />

	<p class="mt-2 text-cyan-100">
		A tool to find the nearest colour from
		{#if tailwindVersion === 'v3.3+'}
			<a href="https://tailwindcss.com/docs/customizing-colors"> the Tailwind colour palette</a>
		{/if}

		{#if tailwindVersion === 'v3.2'}
			<a
				href="https://web.archive.org/web/20230318012140/https://tailwindcss.com/docs/customizing-colors"
			>
				the <strong>Tailwind v3.0-3.2</strong> colour palette</a
			>
		{/if}
		{#if tailwindVersion === 'v2'}
			<a href="https://v2.tailwindcss.com/docs/customizing-colors">
				the <strong>Tailwind {tailwindVersion}</strong> colour palette</a
			>
		{/if}
	</p>
	<div class="flex flex-col sm:flex-row mt-2 gap-y-2 gap-x-4" />
	<div class="mt-4 text-cyan-100">
		<details class="select-none">
			<summary class="cursor-pointer ">Switch Tailwind version</summary>
			<div class="mt-2">
				<a href="/" class:active={$page.url.pathname === '/'} class="no-underline hover:underline"
					>Tailwind v3.3+</a
				>
				|
				<a
					href="/3-2"
					class:active={$page.url.pathname === '/3-2'}
					class="no-underline hover:underline">Tailwind v3.0-3.2</a
				>
				|
				<a href="/2" class:active={$page.url.pathname === '/2'} class="no-underline hover:underline"
					>Tailwind v2</a
				>
				|
				<button on:click={() => dialog.showModal()}>What?</button>
			</div>
		</details>
	</div>
</header>

<style>
	a.active {
		font-weight: 700;
		border-radius: 0.5rem;
		background-color: #ffffff;
		color: #144c62;
		padding-inline: 0.5rem;
		padding-block: 0.125rem;
	}
</style>
