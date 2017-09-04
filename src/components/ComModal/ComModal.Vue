
<template>
  <div class="modal" >
    <div class="modal-con">
      <slot name="modal-header">
        <header class="modal-header ">
          {{modal.title}}<span class="close" @click="closeModal">×</span>
        </header>
      </slot>
      <slot name="modal-body">
        <div class="modal-body">

        </div>
      </slot>
      <slot name="modal-footer">
        <footer class="modal-footer">
          <button type="button" class="Btn BtnDefault "  @click="closeModal">取消</button>
          <button type="button" class="Btn BtnPrimary" @click="callback">确定</button>
        </footer>

      </slot>

    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {}
    },
    props:{

      modal:{
        type:Object,
        required:true
      },
      callback:{
        type:Function,
        default:function () {
          console.log("默认的function函数;");
        }
      }
    },
    watch:{

    },
    methods:{
      closeModal(){
        console.log("取消");
        this.modal.show=false;
      },

    },
    mounted(){

    }

  }
</script>
<style scoped="scoped">
  .modal{ width: 100%; height: 100%; position: fixed; left: 0; top: 0; z-index: 999; background: rgba(0,0,0,0.5);box-sizing: border-box;
    padding: 0 2rem;  }
  .modal-con{  border: 1px solid #ddd; border-radius: .4rem;  background: #fff; }
  .modal-header{ position: relative; height:4rem; line-height: 4rem; text-indent: 1rem; border-bottom: 1px solid #ddd;}
  .modal-header .close{ width: 4rem; text-align: center; font-size: 2rem; position: absolute; right: 0; top: 0;  }


  .modal-body{ padding: 1rem 1rem; font-size: 1.4rem;}
  .modal-footer{ text-align: center; padding: 1rem 1rem 1.2rem; border-top: 1px solid #ddd;}
  .modal-footer button{ margin: 0 20px;}
</style>
