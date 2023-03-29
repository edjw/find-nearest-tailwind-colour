<script>
	import TailwindVersionHelp from './TailwindVersionHelp.svelte';
	export let tailwindVersion = ''; // Can be v3.3+, v3.2 or v2

	let dialog;
</script>

<header class="p-4 mt-1 -ml-4 -mr-4 bg-cyan-800 sm:rounded">
	<h1 class="leading-none text-cyan-50">Find the nearest Tailwind colour</h1>

	<TailwindVersionHelp bind:dialog />
	{#if tailwindVersion === 'v3.3+'}
		<p class="mt-2 text-cyan-100">
			A tool to find the nearest colour from
			<a href="https://tailwindcss.com/docs/customizing-colors"> the Tailwind colour palette</a>
		</p>
		<div class="flex flex-col sm:flex-row mt-2 gap-y-2 gap-x-4" />
		<p class="mt-0 text-cyan-100">
			Switch Tailwind version:
			<a href="/3-2">Tailwind v3.2</a> |
			<a href="/2">Tailwind v2</a>
		</p>
	{/if}

	{#if tailwindVersion === 'v3.2'}
		<p class="mt-2 text-cyan-100">
			A tool to find the nearest colour from
			<a href="https://tailwindcss.com/docs/customizing-colors">
				the <strong>Tailwind {tailwindVersion}</strong> colour palette</a
			>
		</p>
		<p class="mt-2 text-cyan-100">
			Switch Tailwind version:
			<a href="/">Tailwind v3.3+</a> |
			<a href="/2">Tailwind v2</a>
		</p>
	{/if}

	{#if tailwindVersion === 'v2'}
		<p class="mt-2 text-cyan-100">
			A tool to find the nearest colour from
			<a href="https://v2.tailwindcss.com/docs/customizing-colors">
				the <strong>Tailwind {tailwindVersion}</strong> colour palette</a
			>
		</p>
		<p class="mt-2 text-cyan-100">
			Switch Tailwind version:
			<a href="/">Tailwind v3.3+</a> |
			<a href="/3-2">Tailwind v3.2</a>
		</p>
	{/if}

	<div class="text-cyan-50">
		<button on:click={() => dialog.showModal()}>What?</button>
	</div>
</header>
