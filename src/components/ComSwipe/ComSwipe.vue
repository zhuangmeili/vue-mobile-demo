<template>
  <div class="com-swiper">
    <!-- 滚动区域  -->
    <div class="com-swiper-wrap" ref="wrap">
      <slot name="content"></slot>
    </div>
    <!-- dot -->
    <div class="com-swiper-dots">yuandian </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:'com-swipe',
    data(){
      return {}
    },

  }
</script>
<style scoped="scoped">
  .com-swiper{}


</style>
