export const getSortedTodos = () => {}
  

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
