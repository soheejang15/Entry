import React, { Component } from 'react';
import './App.css';
import { Title, RegisterTodo, TodoList } from './components/index.js'

class App extends Component {
  state = {
    todos : [
      {todo : 'hi',},
      {todo : 'i',},
      {todo : 'h',},
    ],
    text : '',
  }

  isDelete = (id) => {
    const { todos } = this.state;

    this.setState({
      todos : todos.filter((items, index) => index !== id )
    })

  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Title/>
        <RegisterTodo/>
        <TodoList 
          todos = {todos} 
        />
      </div>
    );
  }
}

export default App;
