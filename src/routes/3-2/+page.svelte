<script>
	/** @type {import("./$types").PageData} */

	import { isValidColour } from "$/scripts/isValidColour";
	import Header from "$/components/Header.svelte";

	import ColourInput from "$/components/colourInput.svelte";
	import TailwindResult from "$/components/tailwindResult.svelte";

	import { colour as userColour } from "$/scripts/colourStore";
	const tailwindVersion = "v3.2";
</script>

<svelte:head>
	<title>Find the nearest Tailwind {tailwindVersion} Colour</title>
</svelte:head>

<Header {tailwindVersion} />

<main>
	<section class="mt-8">
		<ColourInput {tailwindVersion} />
	</section>

	{#if $userColour != null && isValidColour($userColour)}
		<section class="mt-10">
			<TailwindResult {tailwindVersion} />
		</section>
	{/if}
</main>
