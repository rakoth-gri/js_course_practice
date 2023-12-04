import Render from "./Render.js"

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
        this.store.status(e.target.id);
        break;
      case e.target.matches(".delete"):
        this.store.delete(e.target.id);
        break;
      default:
        return;
    }
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}
