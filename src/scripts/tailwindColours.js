// Borrowed from Zhigang Fang
// https://github.com/zhigang1992/nearestTailwindColor/blob/master/index.js

import colours from "tailwindcss/colors";
const tailwindColours = {};

for (let coloursKey in colours) {
  if (typeof colours[coloursKey] === "string") {
    tailwindColours[coloursKey] = colours[coloursKey];
  } else {
    for (let nestedKey in colours[coloursKey]) {
      tailwindColours[`${coloursKey}-${nestedKey}`] =
        colours[coloursKey][nestedKey];
    }
  }
}

export { tailwindColours };
