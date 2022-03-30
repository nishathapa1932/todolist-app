import { StrictMode } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const todoList = [
  { id: 1, title: "Wash Clothes", completed: false },
  { id: 2, title: "pay bills", completed: true },
];

const reducer = (state = { todos: todoList }, action) => {
  switch(action.type) {
    case 'NEW_TODO':
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload,
        completed: false
      }
      return {...state, todos: [...state.todos, newTodo]}
    default:
      return state;
  }
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDom.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
