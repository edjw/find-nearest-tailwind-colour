/**
 * Check if the input is a valid hex colour
 * @param {string} input - The input to check
 * @returns {boolean} - Whether the input is a valid colour
 */
const isValidColour = (input) => {
	const hexMatch = new RegExp("^#((?:[0-9a-f]{3}){1,2})$", "i");

	return hexMatch.test(input);
};

export { isValidColour };
