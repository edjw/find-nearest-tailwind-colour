import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		prerender: { entries: [] }
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
