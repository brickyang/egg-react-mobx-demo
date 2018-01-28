import { observable, computed, action } from 'mobx'
import uniqueId from 'lodash.uniqueid'

export default class TodoList {
    constructor(items) {
        this.items = items
    }

  @observable todos = this.items || [];
  @observable pendingRequests = 0;

  @computed
  get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo(title) {
      this.todos.push({
          title,
          finished: false,
          id: uniqueId('key-'),
      })
  }
}
