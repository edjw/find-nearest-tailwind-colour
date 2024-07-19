<script>
	import "$/app.css";
	import AppStoreLinks from "$/components/AppStoreLinks.svelte";
	import Banner from "$/components/Banner.svelte";
</script>

<div class="container pt-4 mx-auto">
	<Banner />
</div>
<div class="container grid h-screen px-4 mx-auto max-w-prose grid-cols-1 grid-rows-[auto_1fr_auto]">
	<slot />
	<footer class="p-4 mt-8 -ml-4 -mr-4 sm:rounded text-cyan-50 bg-cyan-800 border-top-4">
		<div class="flex flex-col justify-start sm:items-center sm:flex-row gap-x-6 gap-y-4">
			<p class="mt-0">
				<a
					href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?footer"
					>Nearest Color</a
				>
				is an app that's a better version of this website in every way, including
				<a
					class="font-bold"
					href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?footer"
					>much better color matching</a
				>
				and
				<a
					class="font-bold"
					href="https://nearest-color.com/why-nearest-color-better-than-find-nearest-tailwind-colour?footer"
					>every color input format</a
				>.
			</p>
		</div>
		<div class="my-2">
			<AppStoreLinks />
		</div>

		<p>
			Made by
			<a href="https://edjohnsonwilliams.co.uk"> Ed Johnson-Williams </a>
		</p>
		<p>
			<a href="https://github.com/edjw/find-nearest-tailwind-colour">
				See the code for this website
			</a>
		</p>
	</footer>
</div>
