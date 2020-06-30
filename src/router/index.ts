import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Bills from '@/views/Bills.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/bills'
    },
    {
        path: '/bills',
        component: Bills
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component: Statistics
    }
];

const router = new VueRouter({
    routes
});

export default router;
