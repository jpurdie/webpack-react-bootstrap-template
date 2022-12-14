const paths = require('./paths');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
  app: paths.src + '/main.tsx',
};
const htmlTempaltes = [
  new HtmlWebpackPlugin({
    title: 'Project Title',
    favicon: paths.src + '/assets/icons/favicon.ico',
    template: paths.public + '/index.html', // template file
    filename: 'index.html', // output file
    publicPath: './',
    chunks: ['app'],
  }),
];

/* 
  This is for multiple html templates. Shared libraries will be in "vendor.js/css". 
*/
htmlTempaltes.push(
  new HtmlWebpackPlugin({
    title: 'Project Title',
    favicon: paths.src + '/assets/icons/favicon.ico',
    template: paths.public + '/contact.html', // template file
    filename: 'contact.html', // output file
    publicPath: './',
    chunks: ['contact'], // needs to match the "entry" key
  })
);
entries.contact = paths.src + '/main-contact.tsx';

/* End multiple html templates config */

module.exports = {
  entry: entries,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // path: paths.build,
    filename: '[name].[contenthash].js',
    path: paths.build,
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    ...htmlTempaltes,
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'dist/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
