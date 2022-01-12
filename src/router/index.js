import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from '../app/views/Home.vue';
import PageNotFound from '../app/views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../app/views/About.vue'),
	},
	{
		path: '/:catchAll(.*)',
		component: PageNotFound,
		name: 'NotFound',
	},
];

const router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	base: '/',
	routes,
});

export default router;
