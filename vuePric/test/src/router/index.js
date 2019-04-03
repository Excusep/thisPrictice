import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import showHi from '@/view/showHi'
import watchSound from '@/view/watchSound'
import echartsFile from '@/view/echartsFile'
import nextTick from '@/view/nextTick'
import Hello from '@/view/noFatherSon/Hello'
import World from '@/view/noFatherSon/World'
import home from '@/view/noFatherSon/home'
import callbackFun from '@/view/callbackFun'
import addPic from '@/view/addPic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addPic',
      component: addPic
    },
    {
      path: '/callbackFun',
      name: 'callbackFun',
      component: callbackFun
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/World',
      name: 'World',
      component: World
    },
    {
      path: '/nextTick',
      name: 'nextTick',
      component: nextTick
    },
    {
      path: '/watchSound',
      name: 'watchSound',
      component: watchSound
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/showHi',
      name: 'showHi',
      component: showHi
    },
    {
      path: '/echartsFile',
      name: 'echartsFile',
      component: echartsFile
    }
  ]
})
