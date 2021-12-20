<script>
  import { isValidColour } from "../scripts/isValidColour";

  import ColourInput from "../components/colourInput.svelte";
  import ColourResult from "../components/tailwindResult.svelte";

  import { colour as userColour } from "../scripts/colourStore";
</script>

<svelte:head>
  <title>Find the nearest Tailwind Colour</title>
</svelte:head>

<header class="p-4 mt-1 -ml-4 -mr-4 bg-cyan-800 sm:rounded">
  <h1 class="leading-none text-cyan-50 ">Find the nearest Tailwind colour</h1>
  <p class="mt-2 text-cyan-100">
    A tool to find the nearest colour from
    <a
      href="https://v2.tailwindcss.com/docs/customizing-colors#color-palette-reference"
    >
      the Tailwind colour palette</a
    >
  </p>
  <p class="mt-2 text-sm text-cyan-100">
    Currently using v2 of Tailwind. <a
      href="https://v3--find-nearest-tailwind-colour.netlify.app"
    >
      Check the beta covering v3
    </a>
  </p>
</header>

<main>
  <section class="mt-8">
    <ColourInput />
  </section>

  {#if $userColour != null && isValidColour($userColour)}
    <section class="mt-10">
      <ColourResult />
    </section>
  {/if}
</main>

<footer
  class="p-4 mt-8 -ml-4 -mr-4 sm:rounded text-cyan-50 bg-cyan-800 border-top-4"
>
  <p class="mt-0">
    Made by
    <a href="https://twitter.com/_edjw">Ed Johnson-Williams</a>
  </p>
  <p>
    <a href="https://github.com/edjw/find-nearest-tailwind-colour"
      >See the code for this website</a
    >
  </p>
</footer>
