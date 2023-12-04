export default class Todo {
  constructor(container, store, form) {
    this.$container = container
    this.$form = form
    this.store = store
    this.containerHandler = this.containerHandler.bind(this)
    // methods
    this.render(this.$container, this.store.todos)
    this.addListenerToContainer()
  }

  render(container, data) {
    if(!(data instanceof Array)) {
      alert("ERROR DATA TYPE...")
      return;
    }

    container.innerHTML = data.map(({id, text, completed, date}) => `
      <li class="todo">
          <span class="todo__date">  ${new Date(date).toLocaleString()} </span>
          <label class="${`todo__label ${completed ? "done" : ""}`}"> 
              <input type="checkbox" class="todo__checkbox" id="${id}" ${completed ? "checked" : ""}>
              <em class="todo__text"> ${text} </em>                                           
          </label>
          <button class="todo__btn"> 
          <span class="material-symbols-outlined update" id="${id}"> edit_note</span> 
          <span class="material-symbols-outlined delete" id="${id}"> delete</span>                    
          </button>
        </li>    
    `).join("")
  }

  containerHandler(e) {
    
    if(!(e.target.matches(".todo__checkbox") || e.target.matches(".todo__btn span"))) {
      return;
    }

    switch(true) {
      case e.target.matches(".todo__checkbox"):
        this.store.status(e.target.id)
        break;
      case e.target.matches(".delete"):
          this.store.delete(e.target.id)
          break;
      default:
        return;      

    }
    
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler)
  }
}
