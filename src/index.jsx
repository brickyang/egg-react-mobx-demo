import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './store/todolist';
import App from './App';
// import { useStrict } from 'mobx';
// useStrict(true);

const initialStore = window.__INITIAL_STATE__;
const store = new TodoList(initialStore);

ReactDOM.hydrate(<App todoList={store} />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
