import HomeController from './app/controller/home';
import StoreService from './app/service/store';

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & IConfig;
    middlewares: any;
    jwt: any;
  }

  export interface IController {
    home: HomeController;
  }

  export interface IService {
    store: StoreService;
  }
}

export interface IConfig {
  keys?: string;
  title?: string;
  view?: object;
  assets?: string;
  webpack?: {
    port?: number;
    publicPath?: string;
    buildPath?: string;
    webpackConfigList?: any[];
  };
  development?: { ignoreDirs?: string[] };
}

declare module 'NodeModule' {
  hot: any;
}
