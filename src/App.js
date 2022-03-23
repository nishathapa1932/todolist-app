import './App.css';
import React from 'react';
import { createStore } from 'redux';
import Actions from './components/Actions';
import LIsts from './components/Lists';
import NewTodo from './components/NewTodo';
import rootReducer from './store';
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="todo">
          <h1>TODOS</h1>
          <NewTodo />
          <LIsts store={store} />
          <Actions /> 
        </div>
      </div>
    </Provider>
  );
}

export default App;
