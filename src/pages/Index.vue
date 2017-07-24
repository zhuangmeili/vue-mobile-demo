<template>
  <div class="">
    <ul>
      <li>
        <router-link class="link" to="/swiper">swiper</router-link>
      </li>
    </ul>
    <com-swipe>
      <ul slot="content" ref="swipe">
        <li v-for="item in banners" ref="swipe-item">
          <img :src="item.imgUrl" alt="" class="bannerImg">
        </li>
      </ul>
    </com-swipe>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        banners:[
          {id:1,imgUrl:'../static/fodder/test1.jpg'},
          {id:2,imgUrl:'../static/fodder/test2.jpg'},
          {id:3,imgUrl:'../static/fodder/test3.jpg'},
          {id:4,imgUrl:'../static/fodder/test4.jpg'}
        ]
      }
    }
  }
</script>
<style scoped="scoped">
  .link{ height: 3rem; font-size: 2rem; text-align: center; display: block; line-height: 3rem;
    border-bottom: 1px solid #ddd;}
  .bannerImg{display: block; width: 100%; height: 15rem;}
</style>
