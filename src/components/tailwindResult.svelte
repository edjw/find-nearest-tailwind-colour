<script>
	export let tailwindVersion; // Can be v3.3+, v3.2 or v2
	import { isValidColour } from '../scripts/isValidColour';
	import { tailwindColours as v3_3_colours } from '../colourSets/v3-3_colours';
	import { tailwindColours as v3_2_colours } from '../colourSets/v3-2_colours';
	import { tailwindColours as v2_colours } from '../colourSets/v2_colours';

	import * as nearestColour from 'nearest-color';

	let tailwindColours = {};

	if (tailwindVersion === 'v3.3+') {
		tailwindColours = v3_3_colours;
	} else if (tailwindVersion === 'v3.2') {
		tailwindColours = v3_2_colours;
	} else if (tailwindVersion === 'v2') {
		tailwindColours = v2_colours;
	}

	const getNearestTailwindColour = nearestColour.from(tailwindColours);

	import { colour as userColour } from '../scripts/colourStore';

	let nearestTailwindColour = null; // Object from nearest-color

	let tailwindColourVariant = null; // orange-200
	let tailwindColourValue = null; // #FED7AA

	$: if ($userColour != null && isValidColour($userColour)) {
		nearestTailwindColour = getNearestTailwindColour($userColour);
		tailwindColourVariant = nearestTailwindColour['name'];
		tailwindColourValue = nearestTailwindColour['value'];
	}

	import ColourBlock from './colourBlock.svelte';
	import ColourNameResultBox from './tailwindColourNameResultBox.svelte';
</script>

<p class="font-semibold">Nearest Tailwind Colour in {tailwindVersion}</p>

<p class="mt-0 text-gray-700">
	Here's the nearest colour to
	<code>{$userColour.toUpperCase()}</code>
	in Tailwind's full colour palette.
</p>

<p>
	<span class="text-gray-700"> Tailwind colour name: </span>

	<ColourNameResultBox resultText={tailwindColourVariant} />
</p>

<p class="leading-loose text-gray-700">
	Hex colour code:
	{tailwindColourValue.toUpperCase()}
</p>

<p class="text-gray-700">Preview</p>

<div class="w-48 h-20">
	<ColourBlock backgroundColourHexCode={tailwindColourValue} />
</div>
