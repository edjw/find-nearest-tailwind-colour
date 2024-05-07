<script>
	/**
	 * @type {"v3.3+" | "v3.2" | "v2"}
	 */
	export let tailwindVersion;
	import { isValidColour } from "$/scripts/isValidColour";
	import { tailwindColours as v3_3_colours } from "$/colourSets/v3-3_colours";
	import { tailwindColours as v3_2_colours } from "$/colourSets/v3-2_colours";
	import { tailwindColours as v2_colours } from "$/colourSets/v2_colours";

	import * as nearestColour from "nearest-color";

	let tailwindColours = {};

	if (tailwindVersion === "v3.3+") {
		tailwindColours = v3_3_colours;
	} else if (tailwindVersion === "v3.2") {
		tailwindColours = v3_2_colours;
	} else if (tailwindVersion === "v2") {
		tailwindColours = v2_colours;
	}

	const getNearestTailwindColour = nearestColour.from(tailwindColours);

	import { colour as userColour } from "$/scripts/colourStore";

	let nearestTailwindColour = null;

	/**
	 * @type {string | null}
	 * @example orange-200
	 */
	let tailwindColourVariant = null;

	/**
	 * @type {string | null}
	 * @example #FED7AA
	 */
	let tailwindColourValue = null;

	$: if ($userColour != null && isValidColour($userColour)) {
		nearestTailwindColour = getNearestTailwindColour($userColour);
		tailwindColourVariant = nearestTailwindColour["name"];
		tailwindColourValue = nearestTailwindColour["value"];
	}

	import ColourBlock from "$/components/colourBlock.svelte";
	import ColourNameResultBox from "$/components/tailwindColourNameResultBox.svelte";
</script>

<div class="flex flex-col gap-y-2">
	<p class="font-semibold">
		Nearest Tailwind Colour {tailwindVersion !== "v3.3+" ? ` in ${tailwindVersion}` : ""}
	</p>

	<p class="mt-0 text-gray-700">
		Here's the nearest colour to
		<code>{$userColour.toUpperCase()}</code>
		in {tailwindVersion !== "v3.3+"
			? `Tailwind ${tailwindVersion}`
			: `Tailwind's full colour
			palette.`}
	</p>

	<p class="text-gray-700">Tailwind colour name:</p>
	<ColourNameResultBox resultText={tailwindColourVariant} />

	{#if tailwindColourValue != null}
		<p class="text-gray-700 mt-0">
			Hex colour code:
			{tailwindColourValue.toUpperCase()}
		</p>
	{/if}
	<div>
		<p class="text-gray-700 font-semibold">Preview</p>
		<div class="flex flex-col sm:flex-row mt-2 gap-x-6 gap-y-4">
			<div>
				<p class="text-gray-700 mt-0">
					Tailwind's <span class="italic">{tailwindColourVariant}</span>
				</p>
				<div class="w-48 h-20">
					<ColourBlock backgroundColourHexCode={tailwindColourValue} />
				</div>
			</div>

			<div>
				<p class="text-gray-700 mt-0">Your colour <span class="italic">{$userColour}</span></p>
				<div class="w-48 h-20">
					<ColourBlock backgroundColourHexCode={$userColour} />
				</div>
			</div>
		</div>
	</div>
</div>
