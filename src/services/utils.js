import { actionTypes } from "../const/dom.js";

export const getSortedTodos = (todos) =>
  todos
    .slice(0)
    .sort(
      (todo1, todo2) =>
        new Date(todo2.date).getTime() - new Date(todo1.date).getTime()
    );

export const createTodo = (form, store) => {
  return store.isUpdated
    ? { ...store.isUpdated, date: new Date().toJSON(), text: form.text.value }
    : {
        date: new Date().toJSON(),
        text: form.text.value,
        id: Date.now().toString(),
        completed: false,
      };
};

export const filterTodos = (filter, todos) => {
  switch (filter) {
    case "executed":
      return todos.filter((todo) => todo.completed);
    case "unexecuted":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos.slice(0);
  }
};

export const formReset = (form) => {
  form.reset();
  form.text.focus();
};

// reducer

const initState = JSON.parse(localStorage.getItem("todos") || "[]")

export const reducer = ({ type, payload }, state = initState) => {
  switch (type) {
    case actionTypes.add:
      return [...state, payload];
    case actionTypes.delete:
      return state.filter((todo) => todo.id !== payload);
    case actionTypes.status:
      return state.map((todo) => ({
        ...todo, completed: todo.id === payload ? !todo.completed : todo.completed,
      }));
    case actionTypes.update:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          todo.text = payload.text;
          todo.date = payload.date;
        }
        return todo;
      });
    default:
      console.log(type);      
      return state
  }
};
