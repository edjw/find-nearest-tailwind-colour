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
    class="w-48 px-4 py-1 mt-2 mb-2 font-semibold leading-loose underline border shadow cursor-pointer border-cyan-500 block"
    title="Click to copy"
    on:click={copyColourNameToClipboard}>
    {resultText}
</span>
