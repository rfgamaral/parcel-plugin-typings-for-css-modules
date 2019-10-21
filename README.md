# @rfgamaral/parcel-plugin-typings-for-css-modules

![npm (scoped)](https://img.shields.io/npm/v/@rfgamaral/parcel-plugin-typings-for-css-modules.svg)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@rfgamaral/parcel-plugin-typings-for-css-modules.svg)
![npm](https://img.shields.io/npm/dt/@rfgamaral/parcel-plugin-typings-for-css-modules.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![license](https://img.shields.io/npm/l/@rfgamaral/parcel-plugin-typings-for-css-modules.svg)](LICENSE)

A plugin for the [Parcel](https://parceljs.org/) bundler to generate `.d.ts` (TypeScript type definitions) files for your [CSS Modules](https://github.com/css-modules/css-modules), powered by [`typed-css-modules`](https://github.com/Quramy/typed-css-modules).

## Installation

Just use your favorite 📦 package manager to install the plugin in your project's `devDependencies`:

**npm:**

```sh
npm install --save-dev @rfgamaral/parcel-plugin-typings-for-css-modules
```

**Yarn:**

```sh
yarn add --dev @rfgamaral/parcel-plugin-typings-for-css-modules
```

## Usage

Parcel will handle everything for you automagically, just make sure it's [configured to use PostCSS with CSS Modules](https://en.parceljs.org/css.html#postcss) by adding a `.postcssrc` file to your project root with:

```json
{
  "modules": true
}
```

This plugin also includes support for [naming local class names in camelCase](https://github.com/css-modules/postcss-modules#camel-cased-classes), just pass the `{ camelCase: true }` option to the `.postcssrc` file, like so:


```json
{
  "modules": true,
  "plugins": {
    "postcss-modules": {
      "camelCase": true
    }
  }
}
```

**Note:** With `camelCase` option set to `true`, only kebab-case class names will be converted to camelCase, PascalCase class names will remain as is.

## Credits

This plugin borrows heavily from the follwing similar Parcel plugins:

* [`parcel-plugin-css-modules-type-generator`](https://github.com/garthenweb/parcel-plugin-css-modules-type-generator)
* [`parcel-plugin-typed-css-modules`](https://github.com/Place1/parcel-plugin-typed-css-modules)

Thank you [@garthenweb](https://github.com/garthenweb) and [@Place1](https://github.com/Place1) 🙏

## License

Use of this source code is governed by an MIT-style license that can be found in the [LICENSE](LICENSE) file.
