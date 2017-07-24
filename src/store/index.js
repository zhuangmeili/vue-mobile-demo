/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

//在store中初始化所有的状态
const state={


};
//导出
export default new Vuex.Store({
  state:state,
  actions,
  getters,
  mutations
})

