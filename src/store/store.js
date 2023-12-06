import { filterTodos } from "../services/utils.js";

const store = {
  todos: JSON.parse(localStorage.getItem("todos") || '[]'),
  isUpdated: false,
  subscribers: [],
  // методы

  add(todo) {
    this.todos.unshift(todo);
    this.subscribers.forEach((cb) => cb(this.todos));
  },

  delete(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.subscribers.forEach((cb) => cb(this.todos));
  },

  status(id) {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    }));
    this.subscribers.forEach((cb) => cb(this.todos));
  },

  update(newTodo) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === newTodo.id) {
        todo.text = newTodo.text;
        todo.date = newTodo.date;
      }
      return todo;
    });
    this.subscribers.forEach((cb) => cb(this.todos));
    this.isUpdated = false;
  },

  setIsUpdated(todo) {
    if (todo instanceof Object) this.isUpdated = todo;
  },

  // this.store.filter(e.target.value, e.target.checked)

  filter(filter, checked) {
    const filteredTodos = checked
      ? filterTodos(filter, this.todos)
      : this.todos.slice(0)

    this.subscribers.forEach((cb) => cb(filteredTodos, filter)); 
  },
  

  getState() {
    return this.todos;
  },

  subscribe(obs) {
    this.subscribers.push(obs);
  },
};

export default store;
