import { createRouter, createWebHistory } from 'vue-router';
import Calendar from '../views/Calendar.vue';
import Home from '../views/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: Calendar 
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router
