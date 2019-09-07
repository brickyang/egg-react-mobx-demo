import { observer } from 'mobx-react';
import * as React from 'react';

@observer
export default class TodoListView extends React.Component<IProps, {}> {
  render() {
    return (
      <ul>
        {this.props.todoList.todos.map(todo => (
          <TodoView todo={todo} key={todo.id} />
        ))}
        <p className="counter">
          Tasks left: {this.props.todoList.unfinishedTodoCount}
        </p>
      </ul>
    );
  }
}

const TodoView = observer(({ todo }) => (
  <li>
    <input
      style={{ marginRight: '10px' }}
      readOnly
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));

interface IProps {
  todoList: any;
}
