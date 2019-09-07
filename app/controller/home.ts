import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    const initialStore = this.service.store.initialStore;

    await this.ctx.render('index', {
      title: this.app.config.title,
      assets: require(this.app.config.assets),
      initialStore: JSON.stringify(initialStore),
    });
  }
}
