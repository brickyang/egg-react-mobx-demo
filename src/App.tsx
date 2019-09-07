import * as React from 'react';

import TodoListView from './TodoListView';

export default class App extends React.Component<any, {}> {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <TodoListView todoList={this.props.todoList} />
          <button
            className="button"
            onClick={() => this.props.todoList.addTodo('new task')}
          >
            Click
          </button>
        </div>
      </div>
    );
  }
}
