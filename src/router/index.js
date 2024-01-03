import { createRouter, createWebHistory } from 'vue-router'
//引入元件
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: '/',          //自定義路由
      name: 'home',       //自定義頁面名稱
      component: HomeView //使用到的元件
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
      //當進入此網址時才會呼叫componenet
      component: () => import('../views/AboutView.vue') 
    },
    {
      path:'/calc',
      name:'calc',
      component:()=>import('../views/CalcView.vue')
    },
    {
      path:'/ClassJan02',
      name:'ClassJan02',
      component:()=>import('../views/ClassJan02.vue')
    },
    {
      path:'/TodoList',
      name:'TodoList',
      component:()=>import('../views/TodoList.vue')
    },
  ]
})

export default router
