const assetsPlugin = require('assets-webpack-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');
const { webpack: { port } } = require('./config.default');

module.exports = {
  context: paths.appSrc,
  devtool: 'cheap-module-source-map',
  entry: [
    './index',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
  ],
  output: {
    filename: '[name].js',
    path: paths.appBuild,
    pathinfo: true,
    publicPath: `http://localhost:${port}/app/public/`,
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css' ],
  },
  module: {
    // strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        // include: paths.appSrc,
        exclude: /node_modules/,
        // options: { cacheDirectory: true },
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: paths.appSrc,
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        // use: [ 'style-loader', 'css-loader' ],
        include: path.resolve(__dirname, '../node_modules/antd/lib/'),
      },
      {
        exclude: [ /\.js$/, /\.html$/, /\.json$/ ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new assetsPlugin({ filename: 'assets.dev.json', path: 'app/public' }),
    new extractTextPlugin({ filename: '[name].css' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
