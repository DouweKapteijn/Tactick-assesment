import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/home/HomePage.vue";
import VehicleDetails from "./components/details/VehicleDetails.vue";
import TenaamStellingen from "./components/tenaamstellingen/TenaamStellingen.vue";

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
  {
    path: "/tenaamstellingen",
    name: "TenaamStellingen",
    component: TenaamStellingen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
