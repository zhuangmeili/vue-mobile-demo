<template>
  <div>
    <section class="creBody" v-show="creList && creList.length">
      <ul class="creList"
          v-infinite-scroll="getNextPage"
          infinite-scroll-distance="10"
          infinite-scroll-disabled="isToEnd">
        <li class="creItem" v-for="(item,index) in creList" :key="item.id" >
          <header class="title">{{item.title}}--{{index+1}}</header>
          <p class="passage">
            {{item.text}}
          </p>
        </li>
      </ul>
      <p class="loading" v-show="isLoading">正在加载中…</p>
      <p class="noMore" v-if="isToEnd">没有更多了</p>
    </section>
  </div>
</template>

<script>

  export default {
    name: "CreditList",
    data(){
      return{
        creList:[],
        //分页相关
        curPage: 0,       //当前页
        pageSize: 10,     //每页数据条数
        isLoading: false, //加载中
        isToEnd: false,   //已经到底部了
        isFirstLoad: true,//加载第一页
        projectType:'',   // AB 方案
      }
    },

    mounted(){

    },
    methods:{
      getList() {
        console.log('get page'+this.curPage);
        if(this.curPage>=5){
          this.isToEnd=true; // 已经到底部了
        }
        let start=(this.curPage-1)*this.pageSize;
        let end=(this.curPage)*this.pageSize;
        let data=[];
        for (let i=start;i<end;i++){
          data.push({
            id:i,
            title:'Vue 无限滚动实现demo',
            text:`中的自定义指令是对底层 dom 进行操作,下面以实现滚动到底部加载数据,实现无限加载来介绍如何自定义一个简单的指令`
          });
        }
        setTimeout(()=>{
          this.creList=this.creList.concat(data);
          this.isLoading=false;
        },1000);
      },
      getNextPage() {
        let isLoading = this.isLoading;
        //加载第一页
        if (!isLoading) {
          let nextPage = this.curPage + 1;
          this.curPage = nextPage;
          this.isLoading = true;
          this.getList();
        }
      },
    }
  }
</script>

<style scoped>
  .creBody {
    padding: 0 0.6rem;
  }
  .creItem {
    background: #f1f1f1;
    margin-top: 0.5rem;
    padding: 0.8rem 0.5rem 0.9rem;
  }
  .creItem .title {
    font-size: 0.8rem;
    padding-bottom: 0.1rem;

  }

  .creItem .passage {
    font-size: 0.6rem;
    color: #474646;
  }
  .loading{ text-align: center; line-height: 1.5rem;}
  .noMore{ text-align: center; line-height: 1.5rem;}

</style>
