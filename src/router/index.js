import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VuexCounter from "@/components/vuex/VuexCounter";
import Employees from "@/components/Employees";
import UserList from "@/components/UserList";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/counter",
    name: "counter",
    component: VuexCounter,
  },
  {
    path: "/employees",
    name: "employees",
    component: Employees,
  },
  {
    path: "/users",
    name: "userlist",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
