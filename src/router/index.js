import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'myPage',
      component: () => import('@/views/MyPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/input',
      name: 'inputReload',
      component: () => import('@/views/InputReload.vue')
    }
  ]
})

export default router
