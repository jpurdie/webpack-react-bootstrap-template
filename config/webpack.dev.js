const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
  },
  module: {
    rules: [],
  },
});
