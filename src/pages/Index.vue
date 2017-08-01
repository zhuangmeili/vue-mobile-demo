<template>
  <div class="">
    <ul>
      <li>
        <router-link class="link" to="/swiper">swiper</router-link>
      </li>
    </ul>
    <com-swipe class="swiper">
      <!-- pics -->
      <ul slot="pics" class="pics" >
        <li v-for="item in banners" class="swipe-item" >
          <img :src="item.imgUrl" alt="" class="bannerImg">
        </li>
      </ul>
      <ol slot="dots" class="dots" >
        <li v-for="i in dotsNumber">{{i}}</li>
      </ol>
    </com-swipe>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        banners:[
          //前台处理一下，让数据变成原来的二倍（后台反馈的是4条，前台处理一下*2倍；）
          {id:1,imgUrl:'../static/fodder/test1.jpg'},
          {id:2,imgUrl:'../static/fodder/test2.jpg'},
          {id:3,imgUrl:'../static/fodder/test3.jpg'},
          {id:4,imgUrl:'../static/fodder/test4.jpg'},
          {id:1,imgUrl:'../static/fodder/test1.jpg'},
          {id:2,imgUrl:'../static/fodder/test2.jpg'},
          {id:3,imgUrl:'../static/fodder/test3.jpg'},
          {id:4,imgUrl:'../static/fodder/test4.jpg'}
        ],

      }
    },
    computed:{
      dotsNumber(){
        return this.banners.length/2;
      }
    }
  }
</script>
<style scoped="scoped">
  .link{ height: 3rem; font-size: 2rem; text-align: center; display: block; line-height: 3rem;
    border-bottom: 1px solid #ddd;}
  .bannerImg{display: block; width: 100%; height: 15rem;}


  .swiper {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
  }

  .pics {
    display: flex;
    display: -webkit-flex;
    /*transition:cubic-bezier(0.59, -0.03, 0.28, 1) 0.4s;*/
    /*-webkit-transition:cubic-bezier(0.59, -0.03, 0.28, 1) 0.4s ;*/


  }

  .pics li {  flex: 1;  }

  .pics li img {  height: 20rem;  display: block;  }
  .dots{ width: 100%; position: absolute; left: 0; bottom: 10px; z-index: 9;  text-align: center;  }
  .dots li{ display: inline-block; width: 20px; height: 20px; background: rgba(0,0,0,0.2);  margin:0 5px;
    border-radius: 50%; text-indent: 100px; overflow: hidden;}
  .dots li.cur{ background: rgba(37, 224, 5, 0.8);;}
</style>
