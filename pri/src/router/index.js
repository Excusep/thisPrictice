import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerA from '@/router/auto'

const routerConfig = routerA()

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      children: routerConfig
    }
  ]
})
