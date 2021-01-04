import autoProcess from "svelte-preprocess";

const preprocess = autoProcess({ postcss: true });

export { preprocess };
