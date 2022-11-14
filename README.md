# AntD v5 + React + TypeScript + CSS Modules

[AntD v5](https://next.ant.design/) replaces LESS with CSS-in-JS. This template adds CSS Modules.

[Demo](https://tangerine-pegasus-42f49f.netlify.app)

## CSS

CSS Modules files use `.module.css` naming. 

Using `.css` will keep your CSS inline with the CSS standard. However you will need to add packages to support functionality like nesting.

## Path Aliases

These are set in `craco.config.js` and `tsconfig.json` and allow importing with path alias like `@components`.

## Netlify

Set env `CI=false` to build command so that TypeScript warnings do no fail build.

Alternatively can use `eslint-plugin-only-warn` to ensure lint failures do not stop builds (not tested).

Set `GENERATE_SOURCEMAP=false` to build command for production

Add `_redirects` file in `public` with `/* /index.html 200` for clientside routing.




