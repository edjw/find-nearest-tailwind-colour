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
		<p>Tailwind has 3 different versions of its colour palette.</p>
		<p>
			So the closest Tailwind colour to your hexcode <em>may</em> vary depending on which version of
			Tailwind you're using.
		</p>
		<p>Tailwind 3.3 added more shades to the Tailwind 3.0-3.2 colour palette.</p>
		<p>Tailwind 3.0 added many colours to the palette from Tailwind 2.</p>

		<p class="font-medium">See the various Tailwind colour palettes</p>

		<ul class="list-disc list-inside mt-2 flex flex-col gap-y-2">
			<li>
				<a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Tailwind v3.3+</a>
			</li>
			<li>
				<a
					href="https://web.archive.org/web/20230318012140/https://tailwindcss.com/docs/customizing-colors"
					target="_blank">Tailwind v3.0-3.2</a
				> (Web Archive snapshot)
			</li>
			<li>
				<a href="https://v2.tailwindcss.com/docs/customizing-colors" target="_blank">Tailwind v2</a>
			</li>
		</ul>
	</div>
</dialog>
