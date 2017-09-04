<template>
  <div class="">
    <header class="header">router 测试分析</header>
    <div class="container">
      <section class="section">
        <header class="title">嵌套路由分析</header>
        <ul>
          <li class="item">
           <router-link to="/router/list">list</router-link>
          </li>
          <li  class="item">
            <router-link to="/router/detail">detail</router-link>
          </li>
        </ul>

        <router-view></router-view>
      </section>


    </div>



  </div>
</template>
<script type="text/javascript">

  export default{
    data(){
      return {}
    },

  }
</script>
<style scoped="scoped">
  .header{ font-size: 2rem; text-align: center; line-height: 4rem; border-bottom: 1px solid #ddd;}
  .container{ padding: 0 1rem;}
  .section{ background: #f4f4f4; margin: 1rem 0; padding: 1rem;}
  .title{ font-size: 1.4rem; color: #26a2ff; line-height: 3rem;}
  .item{ border-bottom: 1px solid #ddd; font-size: 1.4rem; line-height: 3rem;}
  .item a{  display: block; height: 3rem;}
</style>
