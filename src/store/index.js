import { createStore } from "vuex";
import counterModule from "./modules/counter.module";
import employeeModule from "./modules/employee.module";
import usersModule from "./modules/users.module";

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state,
    usersState: usersModule.state,
  },
  mutations: {},
  actions: {},
  modules: {
    counterModule,
    employeeModule,
    usersModule,
  },
  getters: {
    getCounterState(state) {
      return state.counterState.counter;
    },
    getEmployeeState(state) {
      return state.employeeState.employeeList;
    },
    getUsersState(state) {
      return state.usersState.userList;
    },
  },
});
