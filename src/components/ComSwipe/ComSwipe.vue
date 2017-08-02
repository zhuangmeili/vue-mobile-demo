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
      getX(e) {
        let touch = e.touches[0];
        return touch.pageX;
      },
      //显示 图片
      showPics() {
        this.oPics.style.transition='cubic-bezier(0.59, -0.03, 0.28, 1) 0.4s ';
        this.oPics.style.WebkitTransition = 'cubic-bezier(0.59, -0.03, 0.28, 1) 0.4s ';
        this.oPics.style.transform='translateX('+(-this.curPage*this.stepW)+'px)';
        this.oPics.style.WebkitTransform = 'translateX('+(-this.curPage*this.stepW)+'px)';
      },
      // 改变焦点
      changeTabFocus() {
        for(let i=0;i<this.len;i++){
          //oDotLis[i].className="";
        }
        //oDotLis[curPage].className="cur";
      },
      //transitionEnd方法
      transitionEndFn() {
        if(this.curPage==0){
          this.oPics.style.transition='cubic-bezier(0.59, -0.03, 0.28, 1) 0s ';
          this.oPics.style.WebkitTransition = 'cubic-bezier(0.59, -0.03, 0.28, 1) 0s ';
          this.oPics.style.transform='translateX('+(-this.curPage*this.stepW)+'px)';
          this.oPics.style.WebkitTransform = 'translateX('+(-this.curPage*this.stepW)+'px)';
        }
      },
      //自动向左边的轮播
      autoPlayLeft(){
        if(this.autoPlay){
          //oPics.addEventListener("transitionend", transitionEndFn);
          timer=setInterval(function () {
            curPage++;
            if(curPage>=len/2){
              //1、先运动到最后
              showPics();
              //2、curPage  //一瞬间拉过来
              curPage=curPage%(len/2);
            }else{
              showPics();
            }
            changeTabFocus(); //焦点变化
          },intervalTime);
        }
      }
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
