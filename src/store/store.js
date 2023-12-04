const store = {
  todos: [
    {
      id: Date.now().toString(),
      text: "HELLO WORLD",
      completed: false,
      date: new Date().toJSON(),
    },
    {
      id: Date.now().toString(),
      text: "ANOTHER ... HELLO WORLD",
      completed: false,
      date: new Date().toJSON(),
    },
  ],
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

  getState() {
    return this.todos;
  },

  subscribe(obs) {
    this.subscribers.push(obs);
  },
};

export default store;
