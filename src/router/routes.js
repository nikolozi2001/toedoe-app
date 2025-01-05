import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFoundErrorPage from "@/pages/errors/NotFoundErrorPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/tasks",
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/summary",
    name: "summary",
    component: SummaryPage,
  },
  {
    path: "/:notFound(.*)",
    name: "error.404",
    component: NotFoundErrorPage,
  },
];

export default routes;
