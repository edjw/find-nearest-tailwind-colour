<script lang="ts">
	import { get } from "svelte/store";
	import { bannerShownSessionStore, bannerHiddenCountStore } from "../data/bannerStore";
	import { onMount } from "svelte";
	import AppStoreLinks from "./AppStoreLinks.svelte";
	let banner: HTMLDivElement;

	onMount(() => {
		let bannerHiddenCount: number = Number(get(bannerHiddenCountStore));

		if (bannerHiddenCount > 3) {
			bannerShownSessionStore.set("no");
		}

		if (get(bannerShownSessionStore) === "yes") {
			banner.classList.remove("hidden");
			banner.classList.add("flex");
		}
	});

	function hideBanner() {
		banner.classList.remove("flex");
		banner.classList.add("hidden");
		bannerShownSessionStore.set("no");

		let bannerHiddenCount: number = Number(get(bannerHiddenCountStore));
		bannerHiddenCount += 1;
		$bannerHiddenCountStore = String(bannerHiddenCount);
	}
</script>

<div
	bind:this={banner}
	class="flex-row items-center justify-between hidden max-w-3xl px-8 py-4 mx-auto mb-4 border border-indigo-500 rounded gap-x-8 group"
>
	<div class="flex flex-col justify-start text-balance">
		<p class="mt-0">
			<a
				href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?banner"
				class="px-2 py-1 italic font-extrabold text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 hover:text-gray-50"
				>Nearest Color</a
			>
			is an app that's a better version of this website in every way, including
			<a
				class="font-bold"
				href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?banner"
				>much better color matching</a
			>
			and
			<a
				class="font-bold"
				href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?banner"
				>every color input format</a
			>.
		</p>

		<div class="my-2">
			<AppStoreLinks />
		</div>
		<!-- <p class="flex-shrink-0 mt-0">
			<a
				href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?banner"
				class="px-2 py-2 font-medium no-underline transition-all duration-300 rounded-md outline-transparent outline bg-cyan-700 text-gray-50 group-hover:outline-gray-900 hover:outline-black hover:bg-cyan-500"
				>See why it's better</a
			>
		</p> -->
	</div>
	<button type="button" on:click={hideBanner}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="transition-colors rounded-full size-8 outline outline-transparent hover:outline-cyan-500 outline-2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	</button>
</div>
