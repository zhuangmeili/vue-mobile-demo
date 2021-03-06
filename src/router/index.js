import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

//页面组件 的引用
//登陆 我的
import Index from '@/pages/Index'
import Modal from '@/pages/Modal'
import RouteViews from '@/pages/RouteViews'
import WatchView from '@/pages/WatchView';
import CreditList from '@/pages/CreditList';

// 组件的引入
import RouterDetail from '@/components/RouterDetail';
import RouterList from '@/components/RouterList';
import SwiperPage from '@/pages/SwiperPage';



Vue.use(Router);
export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/modal', component: Modal},
    {path: '/swiper', component: SwiperPage},
    {path: '/credit', component: CreditList},
    {
      path: '/router', component: RouteViews,
      children: [
        {path: '', component: RouterList},
        {path: 'list', component: RouterList},
        {path: 'detail', component: RouterDetail},
      ]
    },
    {path: '/watch', component: WatchView}
  ]
})
