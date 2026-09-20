import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
      path: "/home",
      name: "About",
      component: () => import("../views/About.vue"),
    },
  {
    path: "/:pathMatch(.*)/",
    redirect: (to) => {
      const newPath = to.path.replace(/\/$/, ""); 
      return { path: newPath };
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});


export default router;
