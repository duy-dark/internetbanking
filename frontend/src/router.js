import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Regist from './views/regist.vue'
import Customer from './views/customer.vue'
import Listpayment from './views/list-payment-account.vue'
import Transfermoney from './views/transfermoney.vue'
import Historypayment from './views/historypayment.vue'
import Personnel from './views/personnel.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/regist',
            name: 'regist',
            component: Regist
        },
        {
            path: '/customer',
            name: 'customer',
            component: Customer,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/listpayment',
            name: 'listpayment',
            component: Listpayment,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/transfermoney',
            name: 'transfermoney',
            component: Transfermoney,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/historypayment',
            name: 'historypayment',
            component: Historypayment,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/personnel',
            name: 'personnel',
            component: Personnel,
            meta: {
                requiresAuth: true
            }
        }
    ]
})