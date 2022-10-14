const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: './images/[name][ext][query]',
    clean: true,
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new EslintPlugin({
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
      context: path.resolve(__dirname, './src'),
      files: '**/*.js',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          // publicPath: '../fonts/',
          filename: 'dist/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
