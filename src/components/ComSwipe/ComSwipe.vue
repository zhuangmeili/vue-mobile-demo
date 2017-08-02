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
    props:['auto','interval'],
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
        for (let i = 0; i < (this.len)*2; i++) {
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
      test(){
        console.log("get Test方法");
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
      touchStart(e){
        clearInterval(this.timer);//清除timer
        console.log("timer clear"+this.timer);
        this.startTime = (new Date()).getTime();
        this.startX = this.getX(e);
        this.isMove = true;
        return false;
      },
      touchMove(e){
        if (!this.isMove) {
          return false;
        }
        this.endX = this.getX(e);
        this.disX = this.endX - this.startX;
        if(this.disX<0){ //left

        }
        if(this.disX>0){ //drag right
          if (this.curPage==0){
            this.curPage=this.len;
          }
        }
        this.oPics.style.transition='cubic-bezier(0.59, -0.03, 0.28, 1) 0s ';
        this.oPics.style.WebkitTransition = 'cubic-bezier(0.59, -0.03, 0.28, 1) 0s ';
        this.oPics.style.transform = 'translateX(' + (this.disX-this.curPage*this.stepW) + 'px)';
        this.oPics.style.WebkitTransform = 'translateX(' + (this.disX-this.curPage*this.stepW) + 'px)';
        return false;
      },
      touchEnd(e){
        var _this=this;
        if(!this.isMove){ return false; }
        this.isMove=false;
        this.endTime=(new Date()).getTime();
        var speed=Math.abs(this.startX-this.endX)/(this.endTime-this.startTime);

        // 左滑动 left (1)滑动的慢 但是超过1/4 则表示划过去了（2）速度比较快也表示划过去了
        if (this.disX<0) {
          if(Math.abs(this.disX)>this.maxMove ||speed>0.4 ){
            //翻页
            this.curPage++;
            if(this.curPage>=this.len){
              this.showPics();
              this.curPage=this.curPage%this.len;
            }else{
              this.showPics();
            }
            console.log(this.curPage);
            this.changeTabFocus(); //焦点变化
          }else{
            this.showPics();
          }
        }
        // 右滑动 right
        if(this.disX>0){
          if(Math.abs(this.disX)>this.maxMove ||speed>0.4 ){
            this.curPage--;
            this.showPics();
            this.changeTabFocus(); //焦点变化
          }else{
            this.showPics();
          }
        }
        if(!this.timer || this.auto){
          console.log("timer set!!设置timer");
          this.autoPlayLeft();
        }
        return false;
      },
      //自动向左边的轮播
      autoPlayLeft(){
        var _this=this;
        if(this.auto){
          _this.timer=setInterval(function () {
            _this.curPage++;
            if(_this.curPage>=_this.len){
              //1、先运动到最后
              _this.showPics();
              //2、curPage  //一瞬间拉过来
              _this.curPage=_this.curPage%_this.len;
            }else{
              _this.showPics();
            }
            _this.changeTabFocus(); //焦点变化
          },_this.interval);
        }
      },
      swipe(){
        var _this=this;
        this.initSwipe(); // 初始化swipe
        this.oPics.addEventListener("transitionend", this.transitionEndFn);
        this.oPics.addEventListener('touchstart', function (e){_this.touchStart(e);});
        this.oPics.addEventListener('touchmove', function (e){_this.touchMove(e);});
        this.oPics.addEventListener('touchend', function (e){_this.touchEnd(e);});
        this.autoPlayLeft();  //调用autoplay

      }
    },
    mounted(){
      this.$nextTick(function () {
        this.swipe();
      })
    }
  }
</script>
<style scoped="scoped">
  .com-swiper{}


</style>
