<script>
	import { tailwindColours } from "../scripts/tailwindColours";
	import * as nearestColour from "nearest-color";
	const getNearestTailwindColour = nearestColour.from(tailwindColours);

	import { isHexColour } from "../scripts/isHexColour";

	import ColourBlock from "../components/colourBlock.svelte";
	import ColourInput from "../components/colourInput.svelte";
	import { colour as userColour } from "../scripts/colourStore";
	let nearestTailwindColour = null;

	$: if (isHexColour($userColour)) {
		nearestTailwindColour = getNearestTailwindColour($userColour);
	}

	let emptyString = "";
</script>

<svelte:head>
	<title>Find the nearest Tailwind Colour</title>
</svelte:head>

<header class="mt-1">
	<h1
		class="p-4 -ml-4 -mr-4 text-2xl leading-none sm:rounded text-cyan-50 bg-cyan-800">
		Find the nearest Tailwind colour
	</h1>
</header>

<main>
	<section class="mt-8">
		<ColourInput colour={$userColour} />
	</section>

	<section class="mt-10">
		<p class="font-semibold">Nearest Tailwind Colour</p>

		<p class="mt-4">
			<span class="text-gray-700">Colour name: </span>
			<span
				class="w-48 px-4 py-1 mt-4 mb-2 font-semibold leading-loose underline border shadow-sm border-cyan-500">
				{nearestTailwindColour['name']}</span>
		</p>

		<p class="mt-4 leading-loose text-gray-700">
			Hexcode:
			{#if isHexColour(nearestTailwindColour['value'])}
				{nearestTailwindColour['value']}
			{:else}{emptyString}{/if}
		</p>

		<p class="mt-4 text-gray-700">Preview</p>

		<div class="w-48 h-20">
			<ColourBlock
				backgroundColourHexCode={nearestTailwindColour['value']} />
		</div>
	</section>
</main>

<footer
	class="p-4 mt-8 mb-1 -ml-4 -mr-4 sm:rounded text-cyan-50 bg-cyan-800 border-top-4">
	<p>
		A tool to find the nearest colour from the default Tailwind colour
		palette. Made by
		<a href="https://twitter.com/_edjw" class="underline">Ed
			Johnson-Williams</a>
	</p>
</footer>
