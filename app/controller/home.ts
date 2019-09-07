import { Controller } from 'egg';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

import App from '../../src/App';
import TodoList from '../../src/store/todolist';

export default class HomeController extends Controller {
  async index() {
    const initialStore = this.service.store.initialStore;

    const store = new TodoList(initialStore);
    const AppComponent = React.createElement(App, { todoList: store });
    const appHtml = renderToStaticMarkup(AppComponent);

    await this.ctx.render('index', {
      title: this.app.config.title,
      assets: require(this.app.config.assets),
      initialStore: JSON.stringify(initialStore),
      content: appHtml,
    });
  }
}
