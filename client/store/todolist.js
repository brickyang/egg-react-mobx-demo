import { observable, computed } from 'mobx';

export default class TodoList {
  constructor(items) {
    this.items = items;
  }
  @observable todos = this.items || [];
  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}
