import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contactSent from '../views/contactSent.vue'
import Navbar from '@/components/navbar'
import Clients from '@/components/clients'
import About from '@/components/about'
import Feature from '@/components/feature'
import Screenshots from '@/components/screenshots'
import Team from '@/components/team'
import LatestBlog from '@/components/latest_blog'
import Price from '@/components/price'
import Testimonial from '@/components/testimonial'
import ContactUs from '@/components/contact_us'
import Subscribe from '@/components/subscribe'
import Map from '@/components/map'
import Tile from '@/components/tile'
import Footer from '@/components/footer'
import Panel from '@/views/Panel'
import PageNotFound from '@/components/pagenotfound'
import js from '@/components/js'



Vue.use(VueRouter)
Vue.component('Navbar', Navbar)
Vue.component('About', About)
Vue.component('Clients', Clients)
Vue.component('Feature', Feature)
Vue.component('Screenshots', Screenshots)
Vue.component('Team', Team)
Vue.component('Latest-blog', LatestBlog)
Vue.component('Price', Price)
Vue.component('Testimonial', Testimonial)
Vue.component('Contact_us', ContactUs)
Vue.component('Subscribe', Subscribe)
Vue.component('Map', Map)
Vue.component('Footer', Footer)
Vue.component('Panel',Panel)


Vue.component('js', js)
Vue.component('Tile', Tile)


const routes = [
	{
		path: '/',
		name: 'home',
		components: {
			default: Home,
			navbar: Navbar,
		} 
	},
	{
		path: '/en/',
		name: 'homeEn',
		components: {
			default: Home,
			navbar: Navbar,
		},
		props: { navbar: {urlLang: 'en'} }
	},
	{
		path: '/es/',
		name: 'homeEs',
		components: {
			default: Home,
			navbar: Navbar,
		},
		props: { navbar: {urlLang: 'es'} } 
	},
	{
		path: '/br/',
		name: 'homeBr',
		components: {
			default: Home,
			navbar: Navbar,
		},
		props: { default: {urlLang: 'br'}, navbar: {urlLang: 'br'} }
	},
	{
		path: '/contactSent',
		name: 'contactSent',
		components: {
			default: contactSent,
			navbar: Navbar,
		} 
	},
	{
		path:'/panel',
		name:'Panel',
		components:{
			default:Panel,
			navbar:Navbar
		}
	}
	//{
	//	path: '/about',
	//	name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	//	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
