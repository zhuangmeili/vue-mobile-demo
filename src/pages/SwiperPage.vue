<template>
<div>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img class="img" src="../../static/fodder/test1.jpg" alt="">
      <div class="text">Slides居中 + 自定义Slides宽度(140)</div>
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="../../static/fodder/test2.jpg" alt="">
      <div class="text">slide 2</div>
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="../../static/fodder/test3.jpg" alt="">
      <div class="text">slide 3</div>
    </swiper-slide>
    <swiper-slide>
      <img class="img" src="../../static/fodder/test4.jpg" alt="">
      <div class="text">slide 4</div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: "SwiperPage",
    data(){
      return{
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          autoplay:true,
          loop: true,
          spaceBetween: 30,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },
    computed: {

    },
    mounted() {

    }
  }
</script>

<style scoped>
  .swiper-container{ }
  .swiper-slide {
    height: 500px;

    width: 20rem;
  }
  .swiper-slide .img{
    width: 100%;
    height: 400px;
  }

  .swiper-slide .text{
    text-align: center;
    font-size: 1.2rem;
  }
  .swiper-slide-next,.swiper-slide-prev{
    transition: 0.1s all ease-in;
    transform: scale(0.8);
  }


</style>
