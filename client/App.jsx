import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoListView from './TodoListView';
import uniqueId from 'lodash.uniqueid';

const styles = {
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

@observer
export default class App extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <TodoListView todoList={this.props.todoList} />
          <button
            style={styles.button}
            onClick={() =>
              this.props.todoList.todos.push({
                title: 'a new task',
                finished: false,
                id: uniqueId('key-'),
              })}
          >
            Click
          </button>
        </div>
      </div>
    );
  }
}
