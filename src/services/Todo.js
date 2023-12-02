export default class Todo {
  constructor(container, store, form) {
    this.$container = container;
    this.$form = form;
    this.store = store;
    this.containerHandler = this.containerHandler.bind(this);
    this.render(this.$container, this.store.todos);
    this.addListenerToContainer();
  }

  render(container, data) {
    if (!(data instanceof Array)) {
      alert("Ошибка получения данных");
      return;
    }

    let html = "";

    data.forEach(({ id, completed, text, date }) => {
      html += `
                <li class="todo" id="${id}">
                    <span class="todo__date"> ${new Date(
                      date
                    ).toLocaleString()} </span>
                    <label class="${`todo__label ${
                      completed && `todo__label done`
                    }`}"> 
                    <input type="checkbox" id="${id}" class="todo__checkbox" ${
        completed ? "checked" : ""
      }>              <em class="todo__text">  ${text} </em>                                           
                    </label>
                    <button class="todo__btn"> 
                    <span class="material-symbols-outlined update" id="${id}">edit_note</span> 
                    <span class="material-symbols-outlined delete" id="${id}">delete</span>                    
                    </button>
                </li>            
            `;
    });

    container.innerHTML = html;
  }

  containerHandler(e) {
    if (
      !(
        e.target.matches(".todo__checkbox") ||
        e.target.matches(".todo__btn span")
      )
    )
      return;

    switch (true) {
      case e.target.matches(".todo__checkbox"):
        this.store.status(e.target.id);
        break;
      case e.target.matches(".delete"):
        this.store.delete(e.target.id);
        break;
      case e.target.matches(".update"):
        const todo = this.store.todos.find((todo) => todo.id === e.target.id);
        this.store.setIsUpdated(todo);
        this.$form.text.value = todo.text;
        this.$form.text.focus();
        this.addUpdatedClass(todo.id);
        break;
      default:
        return;
    }
  }

  addUpdatedClass(id) {
    [...document.querySelectorAll(".todo")]
      .find((todo) => todo.id === id)
      .classList.add("updated");
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}
