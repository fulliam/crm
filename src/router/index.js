import { createRouter, createWebHistory } from 'vue-router';
import ClientList from '../pages/ClientList/index.vue';
import ClientInfo from '../pages/ClientInfo/index.vue';

const routes = [
	{
		path: '/',
		name: 'ClientList',
		component: ClientList,
	},
	{
		path: '/client/:id',
		name: 'ClientInfo',
		component: ClientInfo,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
