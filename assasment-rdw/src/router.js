import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/home/HomePage.vue";
import VehicleDetails from "./components/details/VehicleDetails.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/vehicle/:kenteken",
    name: "VehicleDetails",
    component: VehicleDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
