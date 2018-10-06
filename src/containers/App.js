import React from 'react';
import uuid from 'uuid';
import style from './App.css'
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import {hot} from 'react-hot-loader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'Finish project'
      }, {
        id: 2,
        text: 'Make a lunch'
      }, {
        id: 3,
        text: 'Pay a bill'
      }]
    };
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data, remainder});
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title name='Todo App' len={this.state.data.length}/>
        <TodoList list={this.state.data} method={this.removeTodo}/>
      </div>
    )
  }
}

export default hot(module)(App);