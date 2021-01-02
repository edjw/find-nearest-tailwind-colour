<script>
    import { isValidColour } from "../scripts/isValidColour";
    import { tailwindColours } from "../scripts/tailwindColours";
    import * as nearestColour from "nearest-color";
    const getNearestTailwindColour = nearestColour.from(tailwindColours);

    import { colour as userColour } from "../scripts/colourStore";

    let nearestTailwindColour = null; // Object from nearest-color

    let tailwindColourVariant = null; // orange-200
    let tailwindColourValue = null; // #FED7AA
    let tailwindBaseColourName = null; // orange
    let tailwindBaseColourNumber = null; // 200

    $: if ($userColour != null && isValidColour($userColour)) {
        nearestTailwindColour = getNearestTailwindColour($userColour);
        tailwindColourVariant = nearestTailwindColour["name"];
        tailwindColourValue = nearestTailwindColour["value"];
        tailwindBaseColourName = tailwindColourVariant.replace(
            /-\d{2,3}$/gi,
            ""
        );
        tailwindBaseColourNumber = tailwindColourVariant.replace(/^\w+-/gi, "");
    }

    import ColourBlock from "./colourBlock.svelte";

    const defaultTailwindColours = [
        "black",
        "white",
        "coolGray", // Aliased to gray
        "red",
        "amber", // Aliased to yellow
        "emerald", // Aliased to green
        "blue",
        "indigo",
        "violet", // Aliased to purple
        "pink",
    ];

    const defaultTailwindAliases = {
        black: "black",
        white: "white",
        gray: "coolGray", //
        red: "red",
        yellow: "amber", //
        green: "emerald", //
        blue: "blue",
        indigo: "indigo",
        purple: "violet", //
        pink: "pink",
    };

    const aliasedAwayColours = {
        coolGray: "gray",
        amber: "yellow",
        emerald: "green",
        violet: "purple",
    };
</script>

<p class="font-semibold">Nearest Tailwind Colour</p>

<p class="mt-0 text-gray-700">
    Here's the nearest colour to
    <code>{$userColour.toUpperCase()}</code>
    in Tailwind's full colour palette.
</p>

<p>
    <span class="text-gray-700">Tailwind colour name: </span>
    <span
        class="w-48 px-4 py-1 mt-4 mb-2 font-semibold leading-loose underline border shadow border-cyan-500">
        {tailwindColourVariant}
    </span>
</p>
<p class="leading-loose text-gray-700 ">
    Hex colour code:
    {tailwindColourValue.toUpperCase()}
</p>

<p class="text-gray-700">Preview</p>

<div class="w-48 h-20">
    <ColourBlock backgroundColourHexCode={tailwindColourValue} />
</div>

{#if defaultTailwindAliases[tailwindBaseColourName] && defaultTailwindAliases[tailwindBaseColourName] !== tailwindBaseColourName}
    <section class="mt-6">
        <p class="font-semibold">Alias clash</p>
        <p class="mt-0">
            Tailwind's default configuration uses "{tailwindBaseColourName}" as
            an alias for the "{defaultTailwindAliases[tailwindBaseColourName]}"
            colours. Using
            <code>{tailwindColourVariant}</code>
            will actually result in
            <code>{defaultTailwindAliases[tailwindBaseColourName]}-{tailwindBaseColourNumber}</code>,
            unless you extend your Tailwind config file as explained below.
        </p>
    </section>
{/if}

{#if defaultTailwindColours.includes(tailwindBaseColourName) === false}
    <section class="mt-6">
        <p class="font-semibold">Non-default colour</p>
        <p class="mt-0">
            Tailwind's default colour palette doesn't include
            <code>{tailwindBaseColourName}</code>. It is in the full palette
            though. You have to extend your
            <code>tailwind.config.js</code>
            file to use
            <code>{tailwindColourVariant}</code>. Here's how.
        </p>

        <div class="mt-4 overflow-hidden prose">
            <pre class="language-js">
                <code
                    class="language-js">
const colors = require(&quot;tailwindcss/colors&quot;)&semi;
module&period;exports &equals; &lcub;
  theme&colon; &lcub;
    extend&colon; &lcub;
      colors&colon; &lcub;
        {tailwindBaseColourName}&colon; colors.{tailwindBaseColourName}
      &rcub;
    &rcub;
  &rcub;
&rcub;&semi;
   </code>
</pre>
        </div>
    </section>
{/if}

{#if aliasedAwayColours.hasOwnProperty(tailwindBaseColourName)}
    <section class="mt-6">
        <p class="font-semibold">
            Available in default config under a different name
        </p>
        <p class="mt-0">
            This is a funky (and confusing) one. Tailwind's
            <em>full</em>
            colour palette has a colour called
            <code>{tailwindColourVariant}</code>. But the
            <em>default</em>
            configuration uses "{aliasedAwayColours[tailwindBaseColourName]}" as
            an alias for "{tailwindBaseColourName}". So, in a zero-config setup,
            you can actually use
            <code>{aliasedAwayColours[tailwindBaseColourName]}-{tailwindBaseColourNumber}</code>
            to get the same colour as
            <code>{tailwindColourVariant}</code>.
        </p>

        <p>
            If you extend the configuration to use one of the "purple" colours
            from the full palette and you also want to use a "violet" colour,
            you need to extend to the "violet" colours as well.
        </p>
    </section>
{/if}
