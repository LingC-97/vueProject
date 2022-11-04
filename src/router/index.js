import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MenuRouter from './modules/menu.js'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/',
      meta: { title: 'vue学习' },
      name: 'login',
      component: () => import('@/Home/login.vue' ),      
      
    },
    {
      path: '/home',
      meta: { title: 'vue学习' },
      name: 'login',
      component: () => import('@/Home/index.vue' ),      
      children:[
        ...MenuRouter
      ]
    },

    

    
    
        
    
  ]
})
