import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

//页面组件 的引用
//登陆 我的
import Index from '@/pages/Index'
import Modal from '@/pages/Modal'
Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', component: Index},
    { path: '/modal', component: Modal},

  ]
})
