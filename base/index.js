class App {
  async init() {
    await this.loadInput();
    await this.loadUI();
  }

  async loadInput() {
    await new Import("./components/input.js").load();
  }

  async loadUI() {
    const component = document.querySelectorAll("[data-component]");
    component.forEach((el) => {
      const input = new Input({
        placeholder: el.dataset.configPlaceholder,
        name: el.dataset.configName,
        id: el.dataset.configId,
        autoComplete: el.dataset.configAutoComplete,
        maxlength: el.dataset.configMaxlength,
      }).getElement();
      el.appendChild(input);
    });
  }
}

const app = new App();

(async () => {
  await app.init();
})();
