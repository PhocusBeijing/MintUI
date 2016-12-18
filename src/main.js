import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/* 引入FontAwesome */
require('../node_modules/font-awesome/css/font-awesome.min.css')
window.$ = require('jquery')
Vue.use(MintUI)
Vue.use(Router)


/* 引入模块 */
import Home from './components/Home.vue'
import Toasts from './components/Toast.vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'
import Actions from './components/Actions.vue'



/* 配置路由 */
const router = new Router({
	mode: 'history', 
	routes: [
		{ path: '/', component: Home},
		{ path: '/home', component: Home },
		{ path: '/toast', component: Toasts },
		{ path: '/loading', component: Loading },
		{ path: '/modal', component: Modal },
		{ path: '/actions', component: Actions }
	]
})



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
