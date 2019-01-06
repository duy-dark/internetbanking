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
var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/',
            name: 'login',
            component: Login
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
            path: '/personnel',
            name: 'personnel',
            component: Personnel,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
  var r = to.matched.some(record => record.meta.requiresAuth);
  if (r === true) {
    var refeshToken = localStorage.getItem('refeshToken');
    if ( refeshToken === undefined||refeshToken===null) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else next();
  } else next();
})

export default router;