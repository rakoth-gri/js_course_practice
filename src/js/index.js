import Todo from "../services/Todo.js";

import {
  TODOS_CONTAINER,
  FORM,
  FILTER_TRIGGER,
  FILTER,
  FILTER_LIST,
} from "../const/dom.js";
import store from "../store/store.js";

console.log(store);

// Todo instance:

const todo = new Todo(TODOS_CONTAINER, store, FORM)

// Observer:

const observer = (todos) => {
  todo.render(TODOS_CONTAINER, todos)
}

store.subscribe(observer)










// STORE ----------


// FILTER SERVICE


const cb = () => {
  
};


// FORM ------
// FORM.addEventListener("submit", submitHandler);



