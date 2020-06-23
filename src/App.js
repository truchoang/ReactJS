import React from 'react';
import './App.css';

import TestComponent from './components/testComponent/testComponent';
import AddToDo from './components/AddTodo/AddToDo';
import NoteContainer from './components/NoteContainer/NoteContainer';
// Stateful component
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        color: 'White',
        todo: [],
    };
  }
  
  addTodo = (work) => {
    if (this.state.todo.indexOf(work) === -1 ){
     this.setState({
        todo: [
          ...this.state.todo,
          work,
        ]
     });
    }
  }

  removeTodo = (work) => {
    let newTodo = this.state.todo.filter(t => {
      return t != work;

    })
    // newTodo = [ 1, 2, 3] 0x000123
    this.setState({
      todo: [
        ...newTodo,
      ]
    })
  }

  render() {
    return (
      <>
        <AddToDo addTodo={this.addTodo}/>
        <NoteContainer todo={this.state.todo} removeTodo={this.removeTodo}/>
      </>
    );
  }
}

export default App;
