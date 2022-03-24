import './App.css';
import React from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Actions from './components/Actions'


function App() {
  return (
    <div className="App">
      <h1>TODOS</h1>
      <NewTodo />
      <Todos />
      <Actions /> 
    </div>
  );
}

export default App;
