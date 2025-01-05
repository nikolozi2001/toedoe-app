import TasksPage from "@/pages/TasksPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

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
];

export default routes;
