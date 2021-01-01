<script>
	import { tailwindColours } from "../scripts/tailwindColours";
	import * as nearestColour from "nearest-color";
	const getNearestTailwindColour = nearestColour.from(tailwindColours);

	import { isValidColour } from "../scripts/isValidColour";

	import ColourBlock from "../components/colourBlock.svelte";
	import ColourInput from "../components/colourInput.svelte";
	import { colour as userColour } from "../scripts/colourStore";
	let nearestTailwindColour = null;

	$: if ($userColour != null && isValidColour($userColour)) {
		nearestTailwindColour = getNearestTailwindColour($userColour);
	}
</script>

<svelte:head>
	<title>Find the nearest Tailwind Colour</title>
</svelte:head>

<header class="p-4 mt-1 -ml-4 -mr-4 bg-cyan-800 sm:rounded">
	<h1 class="leading-none text-cyan-50 ">Find the nearest Tailwind colour</h1>
	<p class="mt-2 text-cyan-100">
		A tool to find the nearest colour from
		<a href="https://tailwindcss.com/docs/customizing-colors">
			the default Tailwind colour palette</a>
	</p>
</header>

<main>
	<section class="mt-8">
		<ColourInput />
	</section>

	<section class="mt-10">
		<p class="font-semibold">Nearest Tailwind Colour</p>
		{#if $userColour != null && isValidColour($userColour)}
			<p>
				<span class="text-gray-700">Tailwind colour name: </span>
				<span
					class="w-48 px-4 py-1 mt-4 mb-2 font-semibold leading-loose underline border shadow-sm border-cyan-500">
					{nearestTailwindColour['name']}</span>
			</p>

			<p class="leading-loose text-gray-700 ">
				Hex colour code:
				{nearestTailwindColour['value']}
			</p>

			<p class="text-gray-700 ">Preview</p>

			<div class="w-48 h-20">
				<ColourBlock
					backgroundColourHexCode={nearestTailwindColour['value']} />
			</div>
		{:else}
			<p class="mt-2 text-sm text-gray-700">
				Enter a hex colour code above.
			</p>
		{/if}
	</section>
</main>

<footer
	class="p-4 mt-8 -ml-4 -mr-4 sm:rounded text-cyan-50 bg-cyan-800 border-top-4">
	<p class="mt-0">
		Made by
		<a href="https://twitter.com/_edjw">Ed Johnson-Williams</a>
	</p>
	<p>
		<a href="https://github.com/edjw/find-nearest-tailwind-colour">See the
			code for this website</a>
	</p>
</footer>
