# AntD + React + TypeScript + CSS Modules

AntD CSS uses LESS, this template adds CSS Modules.

[Demo](https://tangerine-pegasus-42f49f.netlify.app)

## CSS

CSS Modules files can be `.less` or `.css`. 

The advantage of using `.less` is that you can use LESS syntax and gain module level style scoping.

Using `.css` will keep your CSS inline with the CSS standard. However you will need to add packages to support functionality like nesting.

You can use CSS variables `var(--color-primary)` in LESS.

There are a a number of ways to customize the AntD theme, see the [AntD docs](https://ant.design/docs/react/customize-theme) for details.

## Netlify

Set env `CI=false` to build command so that TypeScript warnings do no fail build.

Alternatively can use `eslint-plugin-only-warn` to ensure lint failures do not stop builds (not tested).

Set `GENERATE_SOURCEMAP=false` to build command for production

Add `_redirects` file in `public` with `/* /index.html 200` for clientside routing.




