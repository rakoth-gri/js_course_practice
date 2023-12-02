import Todo from "../services/Todo.js";
import Filter from "../services/Filter.js";
import store from "../store/store.js";
import {
  getSortedTodos,
  createTodo,
  formReset,
} from "../services/utils.js";
import {
  TODOS_CONTAINER,
  FORM,
  FILTER_TRIGGER,
  FILTER,
  FILTER_LIST,
} from "../const/dom.js";

// STORE ----------
const todo = new Todo(TODOS_CONTAINER, store, FORM);

// FILTER SERVICE
new Filter(FILTER, store, FILTER_LIST);

const cb = (todos, filter) => {
  const sortedTodos = getSortedTodos(todos);
  todo.render(TODOS_CONTAINER, sortedTodos);
  if (!filter) localStorage.setItem("todos", JSON.stringify(sortedTodos));
};
store.subscribe(cb);

// FORM ------
FORM.addEventListener("submit", submitHandler);
function submitHandler(e) {
  e.preventDefault();

  let todo = createTodo(this, store);

  if (Object.values(todo).some((v) => v === "")) return;

  if (store.isUpdated) {
    store.update(todo);
  } else {
    store.add(todo);
  }
  formReset(this);
}

// FILTER TRIGGERING -----
FILTER_TRIGGER.onclick = function () {
  FILTER.classList.toggle("active");
};



