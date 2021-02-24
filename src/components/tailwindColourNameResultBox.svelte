<script>
    export let resultText;

    const copyColourNameToClipboard = async (event) => {
        if (!navigator.clipboard) {
            // Clipboard API not available
            return;
        }
        const text = event.target.innerText;
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };
</script>

<span
    class="flex justify-between w-48 px-4 py-1 mt-2 mb-2 border shadow cursor-pointer border-cyan-500"
    title="Click to copy"
    on:click={copyColourNameToClipboard}
>
    <span class="font-semibold leading-loose underline ">
        {resultText}
    </span>
    <svg
        class="w-5 h-5 mt-2"
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
</span>
