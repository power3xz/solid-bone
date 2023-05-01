/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    filename: '[id]-[contenthash].js',
    chunkFilename: '[id]-[contenthash].[ext]',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 8888,
  },
};
