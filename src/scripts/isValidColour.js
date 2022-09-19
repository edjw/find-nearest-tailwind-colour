const isValidColour = (input) => {
	const hexMatch = new RegExp('^#((?:[0-9a-f]{3}){1,2})$', 'i');

	return hexMatch.test(input);
};

export { isValidColour };
