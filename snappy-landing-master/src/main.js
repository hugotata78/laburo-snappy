// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import vueVimeoPlayer from 'vue-vimeo-player'
import carousel from 'v-owl-carousel'
import VueProgressBar from 'vue-progressbar'

// css and scss files include
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/font-awesome.min.css'
import './assets/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueFirestore from 'vue-firestore'
import VueConfirmDialog from 'vue-confirm-dialog'
import VueSimpleAlert from "vue-simple-alert";
import scrollUp  from 'vue-simple-scroll-up'
import GoTop from '@inotom/vue-go-top';


// remove below file for change color
// import './assets/css/color/color-2.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vueVimeoPlayer)
Vue.component('carousel', carousel)
Vue.config.productionTip = false


Vue.use(VueFirestore)
Vue.use(VueSweetalert2)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(VueSimpleAlert);
Vue.use(scrollUp)
Vue.use(GoTop)

const options = {
	color: '#7DEADF',
	failedColor: '#7DEADF',
	thickness: '4px',
	transition: {
		speed: '0.5s',
		opacity: '0.10s',
		termination: 300
	},
	autoRevert: true,
	location: 'top',
	inverse: false
}
Vue.use(VueProgressBar, options)

// -------
// Plugins
// -------

import Inter from 'vue-inter';
Vue.use(Inter);
const inter = new Inter({
	locale: 'es',
	messages: {
		en: require('./lang/en'),
		es: require('./lang/es'),
		br: require('./lang/br'),
	}
});

// -------
// instance of Vue
// -------

export const vues = new Vue()
/* eslint-disable no-new */
new Vue({
	inter,
	router,
	render: h => h(App)
}).$mount('#app')
  
