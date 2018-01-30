import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import TodoList from './store/todolist';
// import { useStrict } from 'mobx';
// useStrict(true);

const initialStore = (window as any).__INITIAL_STATE__;
const store = new TodoList(initialStore);

ReactDOM.render(<App todoList={store} />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
