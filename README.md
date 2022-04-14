# Find the nearest Tailwind colour

[Find the nearest Tailwind colour](https://find-nearest-tailwind-colour.netlify.app) is a web app to help you find the nearest colour from [the full Tailwind CSS colour palette](https://tailwindcss.com/docs/customizing-colors).

<https://find-nearest-tailwind-colour.netlify.app>

A beta for v3 of Tailwind is here:
<https://github.com/edjw/find-nearest-tailwind-colour/tree/v3>

<https://v3--find-nearest-tailwind-colour.netlify.app/>

## Running the project

Run the project in development mode:

```bash
git clone https://github.com/edjw/find-nearest-tailwind-colour.git

cd find-nearest-tailwind-colour

npm install 

npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000).

## Production mode and deployment

To start a production version of your app that runs on Node, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

To create a static version of the site for Netlify/Vercel, run `npm run export`. That's what is running at <https://find-nearest-tailwind-colour.netlify.app>

## Thanks and credit

Thanks to [Daniel Tao for his `nearest-color` package](https://github.com/dtao/nearest-color) that has the algorithm to find the nearest colour.

