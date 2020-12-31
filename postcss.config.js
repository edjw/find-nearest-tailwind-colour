const tailwind = require("tailwindcss");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

const plugins =
  process.env.NODE_ENV === "production"
    ? [postcssImport, tailwind, cssnano]
    : [postcssImport, tailwind];

module.exports = { plugins };
