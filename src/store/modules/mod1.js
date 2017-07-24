/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */

/*
由于使用单一状态树，应用中的所有状态都会集中到一个比较大的对象。当应用变得非常复杂时，
store对象就有可能变得非常臃肿

为了解决以上问题：
vuex允许我们将store分隔成模块（module）。每个模块拥有自己的
state  mutation  action  getter

* */

//state
const state = {

};

// getters
const getters = {

};

// actions
const actions = {

};

// mutations
const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
