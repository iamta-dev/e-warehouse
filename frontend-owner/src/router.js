import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/Dashboard'),
        },
        // FirebaseExample
        {
          name: 'Firebase',
          path: 'firebase',
          component: () => import('@/views/FirebaseExample'),
        },
        // FirebaseExample
        {
          name: 'EntranceExit',
          path: 'entrance-exit',
          component: () => import('@/views/EntranceExit'),
        },
        // FirebaseExample
        {
          name: 'About',
          path: 'about',
          component: () => import('@/views/About'),
        },
        {
          name: 'History',
          path: 'history',
          component: () => import('@/views/History'),
        },
      ],
    },
  ],
})
