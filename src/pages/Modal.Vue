<style scoped="scoped">
  *{ font-size: 1.5rem;}
  .wrapper{ padding: 20px; font-size: 1.5rem;}
  .inputForm{ font-size: 1.5rem; height: 4rem; line-height: 4rem; width: 10rem; border: 1px solid #ddd;}

</style>
<template>
  <div class="wrapper">
    <header>
      computed getter setter
    </header>

    <main>
      自定义 指令
      <br>
      <input class="inputForm" type="text" v-model="cent" v-focus>
      <br><br>  <br>
      <p class="ClorDanger">{{price}}</p>
      <ul>
        <li v-for="i in 5">item{{i}}</li>
      </ul>
      <br>
      <br>
      自定义filter -- 字母首字母大写
      <br>
      <h2 >{{message | capitalize }}</h2>
      <br>
      <br>

      <div role="dialog">
        <button class="Btn BtnPrimary " @click="showModal">打开模态框</button>
        <com-modal :modal="modal" :callback="bindConfirm" v-if="modal.show">
          <div slot="modal-body" class="modal-body">
            我是body 自定义modal
            <br>
            胜多负少开发胜多负少是否是否沙发斯蒂芬的算法东方闪电防守打法是非得失方法水电费水电费水电费水电费都是辅导辅导辅导辅导的的

          </div>
        </com-modal>
      </div>

    </main>
  </div>
</template>
<script type="text/javascript">
  import ComSwipe from "../components/ComSwipe/ComSwipe.vue";

  export default{
    components: {ComSwipe},
    data(){
      return {
        cent:100,
        message:"this is my first filter",
        //modal
        modal:{
          title:"模态框标题",
          show:false
        }
      }
    },
    computed:{
      price:{
        set:function (newVal) {
          this.price=newVal*100;
        },
        get:function () {
          return ((this.cent/100).toFixed(2));
        }
      }


    },
    //局部自定义指令
    directives:{
      focus:{
        inserted:function (el) {
          el.focus();
        }
      }
    },
    filters:{
      capitalize:function (val) {
        var arr1=val.split(" ");
        var newArr=arr1.map((item,index)=>{
          item=item[0].toUpperCase()+item.substring(1);
          return item;
        });
        var newVal=newArr.join(" ");
        return newVal;
      }
    },
    methods:{
      showModal(){
        this.modal.show=true;
      },
      bindConfirm(){
        this.modal.show=false;
        console.log("点击确定");
      }
    }

  }
</script>
<style scoped="scoped">

</style>
