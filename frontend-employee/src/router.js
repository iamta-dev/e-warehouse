import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FirebaseExample from './views/FirebaseExample.vue'
import SignIn from './views/SignIn.vue'
import ForgotPassword from './views/ForgotPassword.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: FirebaseExample
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/DashBoard.vue')
    },
    {
      path: '/camera-status',
      name: 'CameraStatus',
      component: () => import(/* webpackChunkName: "about" */ './views/CameraStatus.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import(/* webpackChunkName: "about" */ './views/Form.vue')
    },
    {
      path: '/scale-room',
      name: 'ScaleRoom',
      component: () => import(/* webpackChunkName: "about" */ './views/ScaleRoom.vue')
    },
    {
      path: '/scale-list',
      name: 'ScaleList',
      component: () => import(/* webpackChunkName: "about" */ './views/ScaleList.vue')
    },
  ]
})
