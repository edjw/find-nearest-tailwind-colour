// const colors = require("tailwindcss/colors.js");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				full: '100%'
			},
			gridTemplateRows: {
				'auto-1-auto': 'auto 1fr auto'
			}
			// colors: {
			// cyan: colors.cyan,
			// },
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
