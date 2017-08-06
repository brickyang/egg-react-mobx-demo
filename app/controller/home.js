require('babel-core/register');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../../client/App.jsx').default;
const TodoList = require('../../client/store/todolist').default;

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      const initialStore = ctx.service.store.initialStore;
      const store = new TodoList(initialStore);

      const content = renderToString(
        React.createElement(App, { todoList: store })
      );

      yield ctx.render('index', {
        title: app.config.title,
        assets: app.config.assets,
        content,
        initialStore: JSON.stringify(initialStore),
      });
    }
  }
  return HomeController;
};
