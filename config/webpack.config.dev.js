const path = require('path');
const webpack = require('webpack');
const assetsPlugin = require('assets-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

const { webpack: { port } } = require('./config.default');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './index',
  ],
  context: path.resolve(__dirname, '../client'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../app/public'),
    publicPath: `http://localhost:${port}/app/public/`,
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css' ],
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
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: path.resolve(__dirname, '../node_modules/antd/lib/'),
      },
    ],
  },
  plugins: [
    new assetsPlugin({
      filename: 'assets.dev.json',
      path: 'app/public',
    }),
    new extractTextPlugin({
      filename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
