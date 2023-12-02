export default class Filter {
  constructor(container, store, data) {
    this.$container = container;
    this.store = store;
    this.containerHandler = this.containerHandler.bind(this);
    this.render(this.$container, data);
    this.addListenerToContainer();
  }

  render(container, data) {
    if (!(data instanceof Array)) {
      alert("Ошибка получения данных");
      return;
    }

    let html = "";

    data.forEach(({ id, type, text, value }) => {
      html += `         
            <li class="filter_li" id="${id}">
                <label class="filter_label">
                    <input type="${type}", value="${value}" class="filter_input"/>
                    ${text}
                </label>
            </li>           `;
    });

    container.innerHTML = `<ul class="filter_ul"> ${html} </ul>`;
  }

  containerHandler(e) {
    if (!e.target.closest(".filter_input")) return;
    this.store.filter(e.target.value, e.target.checked)    
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}
