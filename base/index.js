class App {
  async init() {
    await this.loadComponents();
    await this.loadUI();
  }
  async loadComponents() {
    await new Import("/components/input.js").load();
  }
  async loadUI() {
    const components = document.querySelectorAll("[data-component]");
    components.forEach((el) => {
      if (el.dataset.component === "input") {
        const input = new Input({
            placeholder: el.dataset.configPlaceholder,
            name: el?.dataset?.configName,
            autoComplete: el?.dataset?.configAutoComplete,
            id: el.dataset.configId,
        }).getElement();
        el.appendChild(input);
      }
    });
  }
}

const app = new App();

(async ()=> {
    await app.init();
})();
