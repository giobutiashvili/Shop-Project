import i18n from "@/i18n";
import { createStore } from "vuex";

export default createStore({
  state: {
    searchWord: "",
    language: localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "ge",
    productToCart: localStorage.getItem("productToCart")
      ? JSON.parse(localStorage.getItem("productToCart"))
      : [],
  },
  getters: {},
  mutations: {},
  actions: {
    changeLang({ state }, lang) {
      state.language = lang;
      localStorage.setItem("lang", lang);
      i18n.global.locale = lang;
    },
    setProductToCart({ state }, product) {
      state.productToCart.push(product);
      localStorage.setItem(
        "productToCart",
        JSON.stringify(state.productToCart)
      );
    },
    setSearchWord({ state }, word) {
      state.searchWord = word;
    },
  },
  modules: {},
});
