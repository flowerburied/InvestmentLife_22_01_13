import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [

    {
        path: "/",
        name: "game",
        component: () =>
            import ("@/views/game/game.vue"),
    },
    {
        path: "/gameView",
        name: "gameView",
        component: () =>
            import ("@/views/game/gameView.vue"),
    },
    {
        path: "/qrcode",
        name: "qrcode",
        component: () =>
            import ("@/views/QRcode.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(), //带#号
    // createWebHistory  //不带#号
    routes,
});

export default router;