import { createRouter, createWebHistory } from "vue-router";
import ToDo from "../components/ToDo.vue";
import EjemploReactividad from "../components/EjemploReactividad.vue";
import EjemploDirectivas from "../components/EjemploDirectivas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/todo",
      name: "todo",
      component: ToDo,
    },
    {
      path: "/reactividad",
      name: "reactividad",
      component: EjemploReactividad,
    },
    {
      path: "/directivas",
      name: "directivas",
      component: EjemploDirectivas,
    },
  ],
});

export default router;
