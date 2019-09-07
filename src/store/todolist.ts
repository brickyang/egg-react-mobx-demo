import uniqueId from 'lodash.uniqueid';
import { action, computed, observable } from 'mobx';

import { ITodoItem } from '../../typings';

export default class TodoList {
  @observable todos: ITodoItem[] = [];

  constructor(todos: ITodoItem[]) {
    this.todos = todos;
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title: string) {
    this.todos.push({
      title,
      finished: false,
      id: uniqueId('key-'),
    });
  }
}
