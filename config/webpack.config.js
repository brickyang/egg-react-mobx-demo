const path = require('path');
const webpack = require('webpack');
const assetsPlugin = require('assets-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './index',
  context: path.resolve(__dirname, '../client'),
  output: {
    filename: '[name].[hash].js',
    hashDigestLength: 7,
    path: path.resolve(__dirname, '../app/public'),
    publicPath: 'app/public/',
  },
  resolve: {
    extensions: [ '.js', '.jsx', 'css' ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new assetsPlugin({
      filename: 'assets.json',
      path: 'app/public',
    }),
    new extractTextPlugin({ filename: '[name].[hash].css', ignoreOrder: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      test: /(\.jsx|\.js)$/,
    }),
  ],
};
