<script>
    import ColourBlock from "./colourBlock.svelte";
    let emptyString = "";
    import { colour as userColour } from "../scripts/colourStore";
</script>

<label class="block" for="colour">
    <span class="font-semibold">Enter your colour</span>
    <br />
    <span class="text-sm text-gray-700">Type the hex colour code of the colour
        you want to match
    </span>
</label>

<div class="flex mt-2 space-x-2">
    <input class="w-48 rounded" type="text" bind:value={$userColour} />
    {#if userColour !== null}
        <div class="w-10 h-10">
            <ColourBlock backgroundColourHexCode={$userColour} />
        </div>
    {:else}{emptyString}{/if}
</div>
