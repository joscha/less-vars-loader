# less-vars-loader

[![Build status](https://img.shields.io/travis/joscha/less-vars-loader/master.svg)](https://travis-ci.org/joscha/less-vars-loader)
[![npm](https://img.shields.io/npm/v/crawlkit.svg)](https://www.npmjs.com/package/crawlkit)
![npm](https://img.shields.io/npm/l/crawlkit.svg)
![David](https://img.shields.io/david/joscha/less-vars-loader.svg)
![node](https://img.shields.io/node/v/crawlkit.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Code Climate](https://img.shields.io/codeclimate/github/joscha/less-vars-loader.svg)](https://codeclimate.com/github/joscha/less-vars-loader)

[webpack](https://webpack.github.io) loader to load variables from [less](http://lesscss.org/) files

## Install

```
npm install --save-dev less-vars-loader
```

## Usage

```less
// some.less
@my-var: 2px;
```

```js
const vars = require("less-vars-loader!./some.less");
// vars == { 'my-var': '2px' }
```

### Camel casing

```js
const vars = require("less-vars-loader?camelCase!./some.less");
// vars == { myVar: '2px' }
```

## TODO

* source map support
