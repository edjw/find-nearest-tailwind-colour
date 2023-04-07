<script>
	import '$/app.css';
	export const ssr = false;
</script>

<div class="container grid h-screen px-4 mx-auto max-w-prose grid-cols-full grid-rows-auto-1-auto">
	<slot />
	<footer class="p-4 mt-8 -ml-4 -mr-4 sm:rounded text-cyan-50 bg-cyan-800 border-top-4">
		<p class="mt-0">
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
