import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
});
