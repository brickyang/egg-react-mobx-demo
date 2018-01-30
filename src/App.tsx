import * as React from 'react';
import TodoListView from './TodoListView';

const styles: {
  wrapper: object;
  container: object;
  button: object;
} = {
  wrapper: {
    backgroundColor: '#0277bd',
    height: '100%',
  },
  container: {
    width: '300px',
    marginRight: 'auto',
    position: 'fixed',
    left: 0,
    right: 0,
    margin: 'auto',
    marginTop: '150px',
  },
  button: {
    padding: '8px 50px',
    borderRadius: '4px',
    backgroundColor: 'white',
    border: '1px solid grey',
    marginTop: '10px',
    boxShadow: '0 2px 10px #757575',
  },
};

interface IProps {
  todoList: any;
}

export default class App extends React.Component<IProps, {}> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <TodoListView todoList={this.props.todoList} />
          <button
            style={styles.button}
            onClick={() => this.props.todoList.addTodo('new task')}
          >
            Click
          </button>
        </div>
      </div>
    );
  }
}
