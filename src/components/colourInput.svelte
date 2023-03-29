<script>
	export let tailwindVersion = ''; // Can be v3.3+, v3.2 or v2
	import { colour as userColour } from '../scripts/colourStore';
</script>

<section class="mt-2">
	<p class="font-semibold">Enter a colour, get a Tailwind {tailwindVersion} colour name</p>

	<label class="block mt-0 text-gray-700">
		Type a hex colour code like
		<code>#FFFFFF</code>
		or
		<code>#ed3939</code>

		<input
			placeholder="#FFFFFF"
			class="block w-48 mt-4 uppercase rounded shadow focus:ring-cyan-800"
			id="colour"
			type="text"
			title="Type a hex colour code"
			bind:value={$userColour}
		/>
	</label>

	<label class="block mt-4 text-gray-700">
		Or select a colour from this colour picker
		<input
			type="color"
			class="block w-20 h-10 mt-2 border-2 rounded shadow appearance-none border-cyan-800"
			bind:value={$userColour}
		/>
	</label>
</section>
