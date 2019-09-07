import { EggAppConfig, PowerPartial } from 'egg';

import { output } from './webpack.config.dev';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.development = {
    ignoreDirs: ['app/public', 'config'],
  };

  config.webpack = {
    port: 9000,
    browser: false,
    publicPath: output.publicPath,
    buildPath: output.path,
    webpackConfigList: [require('./webpack.config.dev.js')],
  };

  return config;
};
