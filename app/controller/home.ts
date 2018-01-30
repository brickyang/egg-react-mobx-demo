import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    const initialStore = this.service.store.initialStore;

    await this.ctx.render('index', {
      // this.config is available, but it's type is BaseContextClass.config
      // which can't access IConfig interface we need
      title: this.app.config.title,
      assets: require(this.app.config.assets),
      initialStore: JSON.stringify(initialStore),
    });
  }
}
