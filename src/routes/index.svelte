<script>
	import { tailwindColours } from "../scripts/tailwindColours";
	import * as nearestColour from "nearest-color";
	const getNearestTailwindColour = nearestColour.from(tailwindColours);

	import { isValidColour } from "../scripts/isValidColour";

	import ColourBlock from "../components/colourBlock.svelte";
	import ColourInput from "../components/colourInput.svelte";
	import { colour as userColour } from "../scripts/colourStore";

	let nearestTailwindColour = null;
	let tailwindColourVariant = null;
	let tailwindColourValue = null;
	let tailwindBaseColourName = null;

	$: if ($userColour != null && isValidColour($userColour)) {
		nearestTailwindColour = getNearestTailwindColour($userColour);
		tailwindColourVariant = nearestTailwindColour["name"];
		tailwindColourValue = nearestTailwindColour["value"];
		tailwindBaseColourName = tailwindColourVariant.replace(
			/-\d{2,3}$/gi,
			""
		);
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
			the Tailwind colour palette</a>
	</p>
</header>

<main>
	<section class="mt-8">
		<ColourInput />
	</section>
	{#if $userColour != null && isValidColour($userColour)}
		<section class="mt-10">
			<p class="font-semibold">Nearest Tailwind Colour</p>

			<p class="mt-0 text-gray-700">
				Here's the nearest colour to
				<code>{$userColour.toUpperCase()}</code>
				in Tailwind's full colour palette.
			</p>

			<p>
				<span class="text-gray-700">Tailwind colour name: </span>
				<span
					class="w-48 px-4 py-1 mt-4 mb-2 font-semibold leading-loose underline border shadow border-cyan-500">
					{tailwindColourVariant}</span>
			</p>

			<p class="leading-loose text-gray-700 ">
				Hex colour code:
				{tailwindColourValue.toUpperCase()}
			</p>

			<p class="text-gray-700 ">Preview</p>

			<div class="w-48 h-20">
				<ColourBlock backgroundColourHexCode={tailwindColourValue} />
			</div>
		</section>
	{/if}
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
