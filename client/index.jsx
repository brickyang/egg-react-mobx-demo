import React from 'react';
import { render } from 'react-dom';
import TodoList from './store/todolist';
import App from './App';
import { useStrict } from 'mobx';
useStrict(true);

const initialStore = window.__INITIAL_STATE__;
const store = new TodoList(initialStore);

render(<App todoList={store} />, document.querySelector('#root'));
