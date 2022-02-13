import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/bio",
    name: "Bio",
    component: () =>
      import(/* webpackChunkName: "bio" */ "../views/Bio.vue"),
  },
  {
    path: "/press",
    name: "Press",
    component: () =>
      import(/* webpackChunkName: "press" */ "../views/Press.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
