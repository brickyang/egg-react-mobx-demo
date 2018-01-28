module.exports = app => {
  class HomeController extends app.Controller {
    async index(ctx) {
      const initialStore = ctx.service.store.initialStore;

      await ctx.render('index', {
        title: app.config.title,
        assets: require(app.config.assets),
        initialStore: JSON.stringify(initialStore),
      });
    }
  }
  return HomeController;
};
