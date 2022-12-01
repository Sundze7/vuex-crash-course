import { createStore } from "vuex";
import counterModule from "./modules/counterModule";

export default createStore({
  state: {
    counterState: counterModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    counterModule,
  },
  getters: {
    getCounterState(state) {
      return state.counterState.counter;
    },
  },
});
