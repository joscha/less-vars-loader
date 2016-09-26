'use strict';

const lessToJs = require('less-vars-to-js');
const camelcase = require('camelcase');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const query = loaderUtils.parseQuery(this.query);
  console.log('query', query);
  const camelCaseKeys = !!(query.camelCase || query.camelcase);

  const vars = lessToJs(source);
  console.log('source', source);
  const keys = Object.keys(vars);
  if (!keys.length) {
    this.emitWarning('Could not find any extractable less variables!');
  }

  const transformKey = (key) => {
      let ret = key.replace(/^@/, '');
      if (camelCaseKeys) {
          console.log('XXX');
          ret = camelcase(ret);
      }
      return ret;
  }

  const cleanedVars = keys.reduce((prev, key) => {
      prev[transformKey(key)] = vars[key];
      return prev;
  }, {});

  return `module.exports = ${JSON.stringify(cleanedVars, true, 2)};\n`;
};
