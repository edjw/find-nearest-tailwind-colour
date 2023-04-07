<script>
	import { page } from '$app/stores';

	import TailwindVersionHelp from './TailwindVersionHelp.svelte';
	export let tailwindVersion = ''; // Can be v3.3+, v3.2 or v2

	let dialog;
</script>

<header class="p-4 mt-1 -ml-4 -mr-4 bg-cyan-800 sm:rounded">
	<h1 class="leading-none text-cyan-50">Find the nearest Tailwind colour</h1>

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
	<div class="mt-0 text-cyan-100">
		<details>
			<summary class="cursor-pointer">Switch Tailwind version</summary>

			<a href="/" class:font-bold={$page.url.pathname === '/'}>Tailwind v3.3+</a> |
			<a href="/3-2" class:font-bold={$page.url.pathname === '/3-2'}>Tailwind v3.0-3.2</a> |
			<a href="/2" class:font-bold={$page.url.pathname === '/2'}>Tailwind v2</a> |
			<button on:click={() => dialog.showModal()}>What?</button>
		</details>
	</div>

	<div class="text-cyan-50" />
</header>
