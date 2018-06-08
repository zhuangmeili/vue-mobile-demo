<template>
  <div>
    <section class="creBody" v-show="creList && creList.length">
      <ul class="creList">
        <li class="creItem Flex FlexVer" v-for="(item,index) in creList" :key="item.id" >
          {{item.text}}---{{index}}
        </li>
      </ul>
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
        curPage: 1,       //当前页
        pageSize: 100,     //每页数据条数
        isLoading: false, //加载中
        isToEnd: false,   //已经到底部了
        isFirstLoad: true,//加载第一页
        projectType:'',   // AB 方案
      }
    },

    mounted(){
      this.getList();
    },
    methods:{
      getList() {
        let start=(this.curPage-1)*10;
        let data=[];
        for (let i=start;i<start+10,i++;){
          data.push({
            id:i,
            text:'This is '+ i
          })
        }

        setTimeout(()=>{
          this.creList=data;
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
    padding-right: 0.4rem;
    padding-left: 0.4rem;
  }
  .creItem {
    background: #fff;
    margin-top: 0.5rem;
    padding: 0.8rem 0.5rem 0.9rem;
    height: 2.5rem;
    color: #474646;
  }
  .creItem .logo {
    width: 4.3rem;
    height: 2.75rem;
    margin-right: 0.7rem;
  }
  .creItem .title {
    font-size: 0.75rem;
    padding-bottom: 0.1rem;

  }

  .creItem .passage {
    font-size: 0.6rem;
  }

  .creItem .button {
    font-size: 0.7rem;
    color: #333;
    height: 1.55rem;
    line-height: 1.55rem;
    padding: 0 0.85rem;
    background: #FFD100;
    border-radius: 0.85rem;
    margin-left: 0.5rem;
  }

</style>
