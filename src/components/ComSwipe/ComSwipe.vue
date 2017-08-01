<template>
  <div class="com-swiper">
    <!-- pics  -->
    <div ref="swipePics">
      <slot name="pics" ></slot>
    </div>
    <!-- dots -->
    <div ref="swipeDots">
      <slot name="dots"></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:'com-swipe',
    data(){
      return {
        startX:0,
        endX:0,
        disX:0,
        oPics:null,
        oPicLis:null,
        oImgs:null,

        oDots:null,
        oDotLis:null,
        len:0,
        stepW:0,
        maxMove:0,
        curPage:0,
        isMove:false, //是否运动

        startTime:0,
        endTime:0,
        timer:null,
      }
    },
    methods:{
      initSwipe(){
        //初始化
        this.oPics = this.$refs.swipePics;
        this.oPicLis=this.oPics.getElementsByTagName("li");
        this.oImgs = this.oPics.getElementsByTagName("img");
        this.oDots=this.$refs.swipeDots;

        this.oDotLis=this.oDots.getElementsByTagName("li");
        this.len = this.oPics.getElementsByTagName("li").length/2;
        this.stepW = this.oPics.getBoundingClientRect().width;
        this.maxMove = Math.floor(this.stepW / 4);
        for (let i = 0; i < this.len; i++) {
          this.oImgs[i].style.width = this.stepW + 'px';
          //this.oDotLis[i].className="";
        }
        //this.oDotLis[0].className="cur";
      },
    },
    mounted(){
      this.$nextTick(function () {
        //DOM渲染完成调用swipe方法
        this.initSwipe();

      })
    }
  }
</script>
<style scoped="scoped">
  .com-swiper{}


</style>
