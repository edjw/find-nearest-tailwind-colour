<script>
	import { fade } from "svelte/transition";
	export let resultText;

	export let copied = false;

	const copyColourNameToClipboard = async () => {
		if (!navigator.clipboard) {
			return;
		}

		try {
			await navigator.clipboard.writeText(resultText);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 4000);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};
</script>

<button
	class="w-48 border shadow cursor-pointer py-2.5 px-4"
	title="Click to copy"
	on:click={copyColourNameToClipboard}
>
	{#if copied}
		<div class="flex justify-between items-center" in:fade={{ duration: 500 }}>
			<span class="font-semibold"> Copied! </span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
		</div>
	{:else}
		<div class="flex justify-between items-center" in:fade={{ duration: 500 }}>
			<span class="font-semibold underline">
				{resultText}
			</span>
			<svg
				class="w-5 h-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
				/></svg
			>
		</div>
	{/if}
</button>
