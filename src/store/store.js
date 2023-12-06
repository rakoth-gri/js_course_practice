import { filterTodos } from "../services/utils.js";
// импорт reducer
import { reducer } from "../services/utils.js";


const store = {
  todos: reducer({type: "--INIT--"}),
  isUpdated: false,
  subscribers: [],
  
  filter(filter, checked) {
    const filteredTodos = checked
      ? filterTodos(filter, this.todos)
      : this.todos.slice(0);

    this.subscribers.forEach((cb) => cb(filteredTodos, filter));
  },

  ///////////////////////////////////////////////////////////////////////////////////

  dispatch(action) {
    this.todos = reducer(action, this.todos)
    if (action.type === "update") this.isUpdated = false;
    this.subscribers.forEach((cb) => cb(this.todos)); 
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
