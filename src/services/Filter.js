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
  }

 
  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}