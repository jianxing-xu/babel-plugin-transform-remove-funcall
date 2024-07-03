# babel-plugin-transform-remove-funcall

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A babel plugin that removes certain function calls from your code.
For example:
```js
// input
console.log('hello')
Logger.debug('123')
Logger(123)
Logger.log('123')

// output
console.log('hello')
```

## Install
```bash
# npm
npm i babel-plugin-transform-remove-funcall
# yarn
yarn add babel-plugin-transform-remove-funcall
# pnpm
pnpm i babel-plugin-transform-remove-funcall
```

## Usage
```js
// .babelrc.js or babel.config.js
module.exports = {
  plugins: [['./dist/index.mjs', {
    callChains: ['Logger', 'debug', 'log'],
  }]],
}

// example:
// input
console.log('hello')
Logger.debug('123')
Logger.inst.debug('123')
Logger(123)
Logger.log('123')

// output
console.log('hello')
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Jianxing Xu](https://github.com/jianxing-xu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/babel-plugin-transform-remove-funcall?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/babel-plugin-transform-remove-funcall
[npm-downloads-src]: https://img.shields.io/npm/dm/babel-plugin-transform-remove-funcall?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/babel-plugin-transform-remove-funcall
[bundle-src]: https://img.shields.io/bundlephobia/minzip/babel-plugin-transform-remove-funcall?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=babel-plugin-transform-remove-funcall
[license-src]: https://img.shields.io/github/license/jianxing-xu/babel-plugin-transform-remove-funcall.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/jianxing-xu/babel-plugin-transform-remove-funcall/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/babel-plugin-transform-remove-funcall
