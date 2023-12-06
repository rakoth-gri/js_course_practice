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
    
    if (!e.target.closest(".filter_input")) return

    document.querySelectorAll(".filter_input").forEach(inp => {
      if(inp.value !== e.target.value) inp.checked = false
    })
    
    this.store.filter(e.target.value, e.target.checked)
    
  }

 
  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}