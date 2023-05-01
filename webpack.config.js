/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]_[local]__[hash:base64:5]',
    },
    importLoaders: 2,
    sourceMap: true, // turned off as causes delay
  },
};

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        }),
      ],
    },
    // ident: 'postcss',
    sourceMap: false, // turned off as causes delay
  },
};
const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;
module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  devtool: 'source-map',
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
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.module.scss$/,
        use: [styleLoader, CSSModuleLoader, PostCSSLoader, 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 8888,
    historyApiFallback: true,
  },
};
