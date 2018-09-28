import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput/TodoInput';
import TodoItemList from './TodoItemList/TodoItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoItemList />
      </div>
    );
  }
}

export default App;
