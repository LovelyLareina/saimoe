import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import AboutFy from '../components/aboutFy/aboutFy.vue'
import Register from '../components/registerAndLogin/register.vue'
import Login from '../components/registerAndLogin/login'
import LoginHome from '../components/home/loginHome.vue'
import WriteDiary from '../components/diary/writeDiary.vue'
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
      name: 'aboutFy',
      component: AboutFy
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loginHome',
      name: 'loginHome',
      component: LoginHome
    },
    {
      path: '/writeDiary',
      name: 'writeDiary',
      component: WriteDiary
    }
  ]
})
