
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './modules/App.vue'

import DashboardRoutes from './modules/dashboard/router/routes'
import UsersRoutes from './modules/users/router/routes'

const routes = Object.assign(DashboardRoutes, UsersRoutes)

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    hashbang: false,
    history: true
})

router.map(routes)

router.start(App, '#app')
