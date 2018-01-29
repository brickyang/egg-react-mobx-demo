exports.development = {
  ignoreDirs: [ 'app/public', 'config' ],
};

const webpack = require('./webpack.config.dev.js');
exports.webpack = {
  port: 8080,
  // comment these untill the bug in egg-webpack be fixed
  // publicPath: webpack.output.publicPath,
  // buildPath: webpack.output.path,
  webpackConfigList: [ webpack ],
};
