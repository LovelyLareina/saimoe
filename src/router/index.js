import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import AboutFy from '../components/aboutFy/aboutFy.vue'
import Register from '../components/register/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutFy',
      component: AboutFy
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
