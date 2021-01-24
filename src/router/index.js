import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/red",
  },
  {
    path: "/red",
    name: "Red",
    component: () => import("../components/Red.vue"),
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: () => import("../components/Yellow.vue"),
  },
  {
    path: "/green",
    name: "Green",
    component: () => import("../components/Green.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
