import Render from "./Render.js"
import { actionCreators } from "../const/dom.js";

export default class Todo {
  constructor(container, store, form) {
    this.$container = container;
    this.$form = form;
    this.store = store;
    this.containerHandler = this.containerHandler.bind(this);
    // methods
    this.render(this.$container, this.store.todos);
    this.addListenerToContainer();
  }

  render(container, data) {
    Render.controller(this.constructor.name, container, data)
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
        this.store.dispatch(actionCreators.status(e.target.id));
        break;
      case e.target.matches(".delete"):
        this.store.dispatch(actionCreators.delete(e.target.id));
        break;
      case e.target.matches(".update"):
          const todo = this.store.todos.find(todo => todo.id === e.target.id)         
          this.store.setIsUpdated(todo)
          this.$form.text.value = todo.text
          this.$form.text.focus();
          this.addUpdatedClass(todo.id)
          break;  
      default:
        return;
    }
  }

  addUpdatedClass(id) {        
    [...document.querySelectorAll(".todo")]
      .find(todo => todo.id === id)
      .classList.add("updated")        
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}
