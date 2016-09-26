"use strict";

const path = require("path");
const lessLoaderPath = path.resolve(__dirname, '..', '..');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      [
        {
          test: /\.camelcase\.less$/,
          loader: lessLoaderPath,
          query: 'camelCase'
        },
        {
          test: /\.less$/,
          loader: lessLoaderPath
        },
      ]
    ]
  }
};
