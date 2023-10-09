import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@view/error/404.vue";
import ServerError from "@view/error/500.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@view/HomeView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@view/AboutView.vue"),
    },
    { path: "/:catchAll(.*)", component: NotFound },
    {
        path: "/error",
        name: "InternalServerError",
        component: ServerError,
    },
];

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
