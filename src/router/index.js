import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

Vue.use(Router)
import Discovery from '@/components/discovery'
import Orders from '@/components/orders'
import Show from '@/components/show'
import My from '@/components/my'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/',
      name: 'discovery',
      component: Discovery
    },
    {
      path: '/',
      name: 'orders',
      component: Orders
    },
     {
      path: '/',
      name: 'show',
      component: Show
    },
    {
      path: '/',
      name: 'my',
      component: My
    }
    
  ]
})
