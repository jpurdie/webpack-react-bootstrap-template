const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { LicenseWebpackPlugin } = require('license-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: 'warning',
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new LicenseWebpackPlugin({
      addBanner: true,
      renderBanner: (filename, modules) => {
        console.log(modules);
        return `/*! licenses are at ${filename}*/`;
      },
      handleMissingLicenseText: (packageName, licenseType) => {
        console.log(`Cannot find license for ${packageName}`);
        return 'UNKNOWN';
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          mangle: true,
          sourceMap: true,
          compress: {
            pure_funcs: ['console.log', 'console.debug'],
          },
          format: {
            comments: (astNode, comment) => comment.value.startsWith('! licenses are at '),
            beautify: false,
          },
        },
      }),
    ],
  },
});
