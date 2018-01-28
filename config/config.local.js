exports.development = {
  ignoreDirs: [ 'app/public', 'config' ],
};

const webpack = require('./webpack.config.dev.js');
exports.webpack = {
  port: 8080,
  publicPath: webpack.output.publicPath,
  buildPath: webpack.output.path,
  webpackConfigList: [ webpack ],
};
