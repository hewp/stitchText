const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, './client'),
  entry: [
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot',
      },
      {
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'react-hmre'],
          plugins: ['add-module-exports'],
        },
      },
      {
        test: /\.css$/,
        loaders: [
          'style', 'css',
        ],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url?prefix=font/&limit=5000',
      },
    ],
  },
  postcss: () => {
    return [autoprefixer];
  },
};
