import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VuexCounter from "@/components/vuex/VuexCounter";
import VuexEmployees from "@/components/vuex/VuexEmployees";
import VuexUserList from "@/components/vuex/VuexUserList";

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
    component: VuexEmployees,
  },
  {
    path: "/users",
    name: "userlist",
    component: VuexUserList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
