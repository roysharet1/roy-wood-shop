import Vue from "vue";
import Router from "vue-router";

const homePage = () => import("../components/homePage");

const buyPage = () => import("../components/buyPage");

const router = new Router({
  base: "/woodShop",
  mode: "history",
  test,
  routes: [
    {
      path: "/homePage",
      component: homePage,
      meta: {
        id: "homePageId",
        title: "home",
        icon: "group_work",
      },
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    {
      path: "/buyPage",
      component: buyPage,
      meta: {
        id: "buyPageId",
        title: "Buy",
        icon: "group_work",
      },
      beforeEnter: (to, from, next) => {
        next();
      },
    },
  ],
});

export default router;