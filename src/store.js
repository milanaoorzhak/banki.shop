import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    cart: {},
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    addToCart(state, productTitle) {
      Vue.set(state.cart, productTitle, "✓ В корзине");
    },
    setProcessing(state, productTitle) {
      Vue.set(state.cart, productTitle, "Обрабатывается");
    },
    resetState(state, productTitle) {
      Vue.set(state.cart, productTitle, "Купить");
    },
  },
  actions: {
    addToCart({ commit }, productTitle) {
      commit("addToCart", productTitle);
    },
    setProcessing({ commit }, productTitle) {
      commit("setProcessing", productTitle);
    },
    resetState({ commit }, productTitle) {
      commit("resetState", productTitle);
    },
  },
  getters: {
    getCartState: (state) => (productTitle) => {
      return state.cart[productTitle] || "Купить";
    },
  },
  plugins: [
    (store) => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        Object.keys(parsedCart).forEach((key) => {
          if (parsedCart[key] === "✓ В корзине") {
            store.commit("addToCart", key);
          } else {
            store.commit("resetState", key);
          }
        });
      }
      store.subscribe((mutation, state) => {
        const cartState = {};
        Object.keys(state.cart).forEach((productTitle) => {
          if (state.cart[productTitle] === "✓ В корзине") {
            cartState[productTitle] = "✓ В корзине";
          }
        });
        localStorage.setItem("cart", JSON.stringify(cartState));
      });
    },
  ],
});
