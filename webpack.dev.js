const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: process.env.FAST ? false : 'eval-source-map',
  performance: {
    hints: 'warning',
  },
  // devServer: {
  //   open: true,
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   client: {
  //     progress: false,
  //   },
  //   compress: true,
  //   port: 9000,
  // },
  plugins: [],
});
