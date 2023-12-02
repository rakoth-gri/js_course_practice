import { filterTodos } from "../services/utils.js";

const store = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  isUpdated: null,
  subsribers: [],

  add(todo) {
    this.todos.unshift(todo);
    this.subsribers.forEach((cb) => cb(this.todos));
  },

  delete(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.subsribers.forEach((cb) => cb(this.todos));
  },

  status(id) {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    }));
    this.subsribers.forEach((cb) => cb(this.todos));
  },

  update(newTodo) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === newTodo.id) {
        todo.text = newTodo.text;
        todo.date = newTodo.date;
      }
      return todo;
    });
    this.subsribers.forEach((cb) => cb(this.todos));
    store.isUpdated = false;
  },

  setIsUpdated(todo) {
    if (todo instanceof Object) this.isUpdated = todo;
  },

  filter(filter, checked) {
    const filteredTodos = checked
      ? filterTodos(filter, this.todos)
      : [...this.todos];
    this.subsribers.forEach((cb) => cb(filteredTodos, filter));
  },

  getState() {
    return this.todos;
  },

  subscribe(cb) {
    this.subsribers.push(cb);
  },
};

export default store;
