import Render from "./Render.js";

export default class Filter {
  constructor(container, store, data) {
    this.$container = container;   
    this.store = store;
    this.containerHandler = this.containerHandler.bind(this);
    // methods
    this.render(this.$container, data);
    this.addListenerToContainer();
  }

  render(container, data) {
    Render.controller(this.constructor.name, container, data)
  }

  containerHandler(e) {
    // if (
    //   !(
    //     e.target.matches(".todo__checkbox") ||
    //     e.target.matches(".todo__btn span")
    //   )
    // )
    //   return;

    
  }

 
  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}