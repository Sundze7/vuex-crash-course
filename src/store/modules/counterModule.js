export default {
  namespaced: true,
  state: {
    counter: {
      count: 0,
    },
  },
  mutations: {
    INCR_COUNTER(state) {
      state.counter.count = state.counter.count + 1;
    },
    DECR_COUNTER(state) {
      state.counter.count = state.counter.count - 1;
    },
    INCR_COUNTER_BY(state, payload) {
      state.counter.count = state.counter.count + payload.value;
    },
  },
  actions: {
    incrementCounter({ commit }) {
      return commit("INCR_COUNTER");
    },
    decrementCounter({ commit }) {
      return commit("DECR_COUNTER");
    },
    incrementCounterBy({ commit }, payload) {
      return commit("INCR_COUNTER_BY", payload);
    },
  },
};
