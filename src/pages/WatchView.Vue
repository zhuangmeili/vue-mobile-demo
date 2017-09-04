<template>
  <div class="">
    <header>watch 使用</header>
    <main>
      <input class="formInp" type="text" v-model="example0">

      <br> <br>
      <input class="formInp" type="text" v-model="example1">
      <br> <br>
      <input class="formInp" type="text" v-model="example2.inner0">
    </main>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        example0:"",
        example1:"",
        example2:{
          inner0:1,
          inner1:2
        },

      }
    },
    watch:{
      example0(newVal,oldVal){
        console.log(newVal,oldVal);
      },
      example1:'fnA',//值可以为methods的方法名
      example2:{
        //注意：当观测的数据为对象或者数组时，newVal oldVal是相等的，因为传递的时地址是一致的
        handler(newVal,oldVal){
          console.log(newVal.inner0,oldVal.inner0);
        },
        deep:true
      }
    },
    methods:{
      fnA(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    }

  }
</script>
<style scoped="scoped">
.formInp{ width: 20rem; height: 4rem; border: 1px solid #ddd;}
</style>
