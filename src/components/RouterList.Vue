<template>
  <div class="container">
    组件 list,dshfsfsdf舒服舒服胜多负少是否
    <br>
    router-view


  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {}
    },
    beforeRouteEnter(to,from,next){
      console.log("beforeRouteEnter");
      setTimeout(()=>{
        next();
      },5000);
    }

  }
</script>
<style scoped="scoped">
  .container{ background: #fff; font-size: 1.4rem; color: red; height:10rem }

</style>
