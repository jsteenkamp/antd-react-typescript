# AntD + React + TypeScript

AntD CSS uses LESS, this template adds CSS Modules.

## CSS

CSS Modules can be `.less` or `.css`. 

The advantage of using `.less` is that you can use LESS syntax and gain module level style scoping.

Using `.css` will keep your CSS inline with the standards. However you will need to add packages to support nesting.

You can use CSS variables in LESS `var(--color-primary)`.

There are a a number of ways to customize the AntD theme, see the [AntD docs](https://ant.design/docs/react/customize-theme) for details.

## Netlify

Set env `CI=false` to build command so that TypeScript warnings do no fail build.

Set `GENERATE_SOURCEMAP=false` to build command for production

Add `_redirects` file in `public` with `/* /index.html 200` for clientside routing.

[Netlify deployment](https://tangerine-pegasus-42f49f.netlify.app)