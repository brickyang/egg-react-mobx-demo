import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const styles = {
  ul: {
    backgroundColor: 'white',
    borderRadius: 4,
    boxShadow: 'inset 0 0 1px grey',
  },
  li: {
    padding: '12px 22px',
    borderBottom: '1px solid #E0E0E0',
  },
  text: {
    padding: '10px 20px',
    textAlign: 'right',
  },
};

@observer
export default class TodoListView extends Component {
  render() {
    return (
      <ul style={styles.ul}>
        {this.props.todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
        <p style={styles.text}>
          Tasks left: {this.props.todoList.unfinishedTodoCount}
        </p>
      </ul>
    );
  }
}

const TodoView = observer(({ todo }) =>
  <li style={styles.li}>
    <input
      style={{ marginRight: '10px' }}
      readOnly
      type="checkbox"
      checked={todo.finished}
      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
);

TodoListView.propTypes = {
  todoList: PropTypes.object.isRequired,
};
