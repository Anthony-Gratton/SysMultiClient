import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/pages/HomePage.vue')
        },
        {
            path: '/planets',
            name: 'planets',
            component: () => import('@/views/pages/PlanetPage.vue')
        }
    ]
})

export default router