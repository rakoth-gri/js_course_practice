import Todo from "../services/Todo.js";
import Filter from "../services/Filter.js";
import {
  TODOS_CONTAINER,
  FORM,
  FILTER_TRIGGER,
  FILTER,
  FILTER_LIST,
} from "../const/dom.js";
import store from "../store/store.js";
import { createTodo, formReset, getSortedTodos } from "../services/utils.js";

// Todo instance:
const todo = new Todo(TODOS_CONTAINER, store, FORM);

// Filter instance:
const filter = new Filter(FILTER, store, FILTER_LIST);


// Observer:
const observer = (todos) => {
  const sortedTodos = getSortedTodos(todos);
  todo.render(TODOS_CONTAINER, sortedTodos);
  localStorage.setItem("todos", JSON.stringify(sortedTodos))
};

// STORE ----------
store.subscribe(observer);

// FORM ------

FORM.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  let todo = createTodo(this, store);

  if (Object.values(todo).some((v) => v === "")) return;

  store.isUpdated ? store.update(todo) : store.add(todo);

  formReset(this);
}

// FILTER SERVICE

FILTER_TRIGGER.addEventListener("click", filterHandler)

function filterHandler(e) {
  FILTER.classList.toggle("active")
}