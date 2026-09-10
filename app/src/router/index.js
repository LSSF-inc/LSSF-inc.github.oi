import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import KitTaskTerms from '../components/termos/kittask.vue'
import KitTaskPrivacy from '../components/privacidade/kittask.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/termos/kittask',
    name: 'kittask',
    component: KitTaskTerms
  },
  {
    path: '/privacidade/kittask',
    name: 'kittask-privacy',
    component: KitTaskPrivacy
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router