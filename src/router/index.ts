import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Card from "@/views/Card.vue";
import Result from "@/views/Result.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
  {
    path: "/result/:id",
    name: "Result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
