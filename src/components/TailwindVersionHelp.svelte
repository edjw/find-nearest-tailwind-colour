<script>
	export let dialog;
</script>

<dialog class="md:w-1/2" bind:this={dialog} on:close on:click={() => dialog.close()}>
	<button
		class="absolute top-2 right-2 px-2 font-bold border"
		on:click={() => dialog.close()}
		on:cancel={() => dialog.close()}
	>
		×
	</button>
	<div class="mt-6 mr-2 md:mr-6">
		<p>
			Tailwind has 3 different versions of its colour palette. So the closest Tailwind colour to
			your hexcode may vary depending on which version of Tailwind you're using.
		</p>
		<p>Tailwind 3.3 introduced more shades in addition to the Tailwind 3.0-3.2 colour palette.</p>
		<p>Tailwind 3 added many colours to the palette from Tailwind 2.</p>
	</div>
</dialog>
