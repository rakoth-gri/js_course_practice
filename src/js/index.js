import Todo from "../services/Todo.js";
import {
  TODOS_CONTAINER,
  FORM,
  FILTER_TRIGGER,
  FILTER,
  FILTER_LIST,
} from "../const/dom.js";
import store from "../store/store.js";
import { createTodo, formReset, getSortedTodos } from "../services/utils.js";

/*

Пишем обработчик формы:
    Отмена поведения по-умолчанию
    Создание todo при помощи утилиты createTodo
    Проверка заполненности объекта todo
    Добавление todo в состояние
    Сортировка todo при помощи утилиты getSortedTodos
    Добавляем getSortedTodos в функцию-callback
    Реализуем утилиту очистки формы "formReset"

  Рефакторим метод render у класса Todo!  
*/

// Todo instance:
const todo = new Todo(TODOS_CONTAINER, store, FORM);

// Observer:
const observer = (todos) => {
  const sortedTodos = getSortedTodos(todos)
  todo.render(TODOS_CONTAINER, sortedTodos);
};

// STORE ----------
store.subscribe(observer);

// FORM ------

FORM.addEventListener("submit", submitHandler)

function submitHandler(e) {

  e.preventDefault()

  let todo = createTodo(this, store)

  if (Object.values(todo).some(v => v === "")) return

  store.isUpdated ? store.update(todo) : store.add(todo)

  formReset(this)
}

// FILTER SERVICE

console.log(todo);
