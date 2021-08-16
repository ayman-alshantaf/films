import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import afterLogin from "../views/afterLogin";
import signIn from "../views/signIn";
import signUp from "../views/signUp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/afterLogin",
    name: "afterLogin",
    component: afterLogin,
  },
  {
    path: "/signIn",
    name: "singIn",
    component: signIn,
  },

  {
    path: "/signUp",
    name: "singUp",
    component: signUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
