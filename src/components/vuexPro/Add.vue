<!-- 此处标记页面 -->
<template>
    <div class=''>
      <h3>当前的Count值:{{count}}</h3>
      <button @click="addBtn1">+1</button>
      <button @click="addBtn2">+N</button>
      <button @click="addBtn3">异步+1</button>
      <button @click="addBtn4">异步+N</button>
      <h3>当前的Count值:{{showNum}}</h3>
        
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
export default {
    data() {
        return {
       
        }
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    mounted(){
        

        
    },
    methods:{
        ...mapMutations(['add','addN']),
        ...mapActions(['addAsync','addNAsync']),
        addBtn1(){
            this.add()
            
        },
        addBtn2(){
            this.addN(3)
        },
        addBtn3(){
            this.addAsync()

        },
        addBtn4(){
            this.addNAsync(5)

        }
        
    },
}

</script>

<style lang="css" scoped>
    
</style>