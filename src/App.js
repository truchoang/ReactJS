import React from 'react';
import './App.css';

import AddToDo from './components/AddTodo/AddToDo';
import NoteContainer from './components/NoteContainer/NoteContainer';
// Stateful component
class App extends React.Component {
  state = {
    color: 'White',
    todo: [],
}

  // constructor() {
  //   super();
  //   this.state = {
  //       color: 'White',
  //       todo: [],
  //   };
  // }
  
  addTodo = (work) => {
    console.log(!!work)
    if (work)  {
      //  if (this.state.todo.indexOf(state.todo.work) === -1 ){
        this.setState({
           todo: [
            {work, status: false},
             ...this.state.todo,
           ]
        });
       
    }     
  }

  // document.getElementById('btn').onkeypress=function(e){
  //   if(e.keyCode==13){
  //       document.getElementById('linkadd').click();
  //   }
  // }

  removeTodo = (work) => {
    let newTodo = this.state.todo.filter(t => {
      return t !== work;

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
