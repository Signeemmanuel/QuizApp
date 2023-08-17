import { createRouter, createWebHistory } from "vue-router";
import QuizzesView from "@/Views/QuizzesView.vue";
import QuizView from "@/Views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: QuizzesView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView,
    },
  ],
});

export default router;
