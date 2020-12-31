const isHexColour = (input) => {
  const hexColourPattern = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexColourPattern.test(input);
};

export { isHexColour };
