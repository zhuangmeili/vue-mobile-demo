// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'

//全局组件 引入
import MintUI from 'mint-ui'
import comSwipe from '@/components/ComSwipe'


//全局组件 使用
Vue.use(MintUI);
Vue.use(comSwipe);

//
Vue.prototype.$http = axios;
//组件的引入
import App from './App'

//全局变量 、方法引入
require('../utlis/global');
require('../utlis/mapUtils');
require('../utlis/moneyUtils');


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});


