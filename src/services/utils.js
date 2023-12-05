export const getSortedTodos = (todos) => todos.slice(0).sort((todo1, todo2) => new Date(todo2.date).getTime() - new Date(todo1.date).getTime())
  

export const createTodo = (form, store) => {

    return store.isUpdated
        ? {...store.isUpdated, date: new Date().toJSON(), text: form.text.value}
        : {date: new Date().toJSON(), text: form.text.value, id: Date.now().toString(), completed: false}
  
};

export const filterTodos = () => {
  
};

export const formReset = (form) => {
    form.reset();
    form.text.focus()  
};
