import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CardView from "@/views/CardView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/card",
    name: "Card",
    component: CardView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
