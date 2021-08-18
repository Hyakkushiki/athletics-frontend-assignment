import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseHome from '../views/BaseHome.vue'
import AddExpense from "../views/AddExpense.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "BaseHome",
    component: BaseHome,
    props: {
      labels: {
        title1: "Expense Tracking",
        title2: "Add",
      }
    },
  },
  {
    path: "/AddExpense",
    name: "AddExpense",
    component: AddExpense,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
