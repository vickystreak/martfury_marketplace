import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'

const routes = [
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  
  {
    name:'Products',
    path:'/products',
    component: () => import('@/pages/Products.vue'),
  },
  {
    name:'Sales',
    path:'/sales',
    component: () => import('@/pages/Sales.vue'),
  },
  {
    name:'Orders',
    path:'/orders',
    component: () => import('@/pages/Orders.vue'),
  },
  {
    name:'Payouts',
    path:'/payouts',
    component: () => import('@/pages/Payouts.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }

  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
