import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Product from '@/pages/product';

const routes = [
/*=================/Routes site/==============================*/
  {path:
    '/',
    component: Product,
    name: 'product'
  },
]

export default new VueRouter({
    mode:'history',
    routes,
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    }
  })
  