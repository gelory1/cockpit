import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overView',
      component: OverView
    },
    {
      path: '/overview',
      redirect: '/'
    },
    {
      path: '/region',
      name: 'region',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Region.vue')
    }
  ]
})

export default router
