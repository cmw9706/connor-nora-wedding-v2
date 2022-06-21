import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Details from "@/pages/Details.vue";
import Registry from "@/pages/Registry.vue";
import Rsvp from "@/pages/Rsvp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
  {
    path: "/rsvp",
    name: "Rsvp",
    component: Rsvp,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
