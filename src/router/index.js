import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TableList from "@/components/TableList";
import SelectedList from "@/components/SelectedList";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: TableList
	},
	{
		path: '/selected',
		name: 'selected',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: SelectedList
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
