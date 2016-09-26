# less-vars-loader [![npm version](https://badge.fury.io/js/less-vars-loader.svg)](http://badge.fury.io/js/less-vars-loader)
[webpack](https://webpack.github.io) loader to load variables from [less](http://lesscss.org/) files

[![Build Status](https://travis-ci.org/joscha/less-vars-loader.svg?branch=master)](https://travis-ci.org/joscha/less-vars-loader)

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
