import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import KitTaskTerms from '../components/termos/kittask.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router