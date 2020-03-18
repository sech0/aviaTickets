class CurrencyUI {
  constructor() {
    this.currency = document.querySelector("#currency");
    this.dictionary = {
      USD: "$",
      EUR: "€"
    };
  }

  get currencyValue() {
    return this.currency.value;
  }

  getСurrencySymbol() {
    return this.dictionary[this.currencyValue];
  }
}

const currencyUI = new CurrencyUI();

export default currencyUI;
