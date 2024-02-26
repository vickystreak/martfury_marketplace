import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      default: () => import('@/pages/Home.vue'),
      sidebar: () => import('@/sidebar/SideBar.vue')
    }
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path:'/products',
    name:'Products',
    components:{
      default:() => import('@/pages/ProductPage.vue'),
      sidebar:() => import('@/sidebar/SideBar.vue')
    }

  },
  {
    path:'/orders',
    name:'Orders',
    components:{
      default:() => import('@/pages/Orders.vue'),
      sidebar:() => import('@/sidebar/SideBar.vue')
    }
  },
  {
    path:'/neworder',
    name:'Neworder',
    components:{
      default:() => import('@/pages/NewOrder.vue'),
      sidebar:() => import('@/sidebar/SideBar.vue')
    }
  }
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
