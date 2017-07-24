/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */
/*
 1、概述：有时候我们需要从store中派生出一些状态，例如对列表进行过滤并计数
 2、[getters]我们可以理解为 store 的计算属性（computed）
 3、getters会暴露 store.getters 对象；其他组件使用的话 this.$store.getters.xxx;
 4、参数
    state  第一个参数
    getters 可以接收第二个参数
 5、将 store 中的 getters 映射到局部计算属性：；例如：
    computed: {
       //count () {
       //    store.state获取状态对象
       //  return this.$store.state.count
       //},
       生成计算属性
       ...mapState([
        'count'
       ]),
       ...mapGetters([
        'doneTodos'
       ])
   },
*/

export default {


  //


  //
}

