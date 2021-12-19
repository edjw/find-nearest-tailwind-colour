# Find the nearest Tailwind colour

[Find the nearest Tailwind colour](https://find-nearest-tailwind-colour.netlify.app) is a web app to help you find the nearest colour from [the full Tailwind CSS colour palette](https://tailwindcss.com/docs/customizing-colors).

<https://find-nearest-tailwind-colour.netlify.app>

This is a beta version to cover v3 of Tailwind CSS.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Thanks and credit

Thanks to [Daniel Tao for his `nearest-color` package](https://github.com/dtao/nearest-color) that has the algorithm to find the nearest colour.
