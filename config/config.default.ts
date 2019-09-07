import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1501988934419_6659';

  // add your egg config in here
  config.middleware = [];

  config.view = {
    defaultExtension: '.njk',
    defaultViewEngine: 'nunjucks',
  };

  // add your special config in here
  const bizConfig = {
    title: 'Todolist Demo',

    api: {
      host: 'https://ctx-api.photoworld.com.cn',
      version: 'v2',
      secret: 'LvlTig0yzW3X4Hrb7zgdUfvudqazVw',
    },

    assets: require('./paths').appBuild + '/assets.json',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
