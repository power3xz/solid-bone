/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],

  // output JS bundle to: build/bundle.js
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  plugins: [new HtmlWebpackPlugin()],
  devtool: 'source-map',
  devServer: {
    port: 8888,
  },
};
