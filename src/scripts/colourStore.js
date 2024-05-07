import { writable } from "svelte/store";

function createColourStore() {
	const { subscribe, set, update } = writable("");

	return {
		subscribe,
		/**
		 * Set the colour value
		 * @param {string} value - The colour value
		 */
		set: (value) => {
			if (value.startsWith("#")) {
				set(value);
			} else {
				set(`#${value}`);
			}
		},
		/**
		 * Update the colour value
		 * @param {function} updater - The updater function
		 */
		update: (updater) => {
			update((currentValue) => {
				const newValue = updater(currentValue);
				if (newValue.startsWith("#")) {
					return newValue;
				}
				return `#${newValue}`;
			});
		}
	};
}

const colour = createColourStore();

export { colour };
