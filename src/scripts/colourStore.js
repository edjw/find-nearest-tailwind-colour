import { writable } from "svelte/store";

function createColourStore() {
	const { subscribe, set, update } = writable("");

	return {
		subscribe,
		set: (value) => {
			if (value.startsWith("#")) {
				set(value);
			} else {
				set("#" + value);
			}
		},
		update: (updater) => {
			update((currentValue) => {
				const newValue = updater(currentValue);
				if (newValue.startsWith("#")) {
					return newValue;
				} else {
					return "#" + newValue;
				}
			});
		}
	};
}

const colour = createColourStore();

export { colour };
