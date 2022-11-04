<!-- 此处标记页面 -->
<template>
    <div class=''>
      <h3>当前的Count值:{{$store.state.count}}</h3>
      <button @click="subBtn1">-1</button>
      <button @click="subBtn2">-N</button>
      <button @click="subBtn3">异步-1</button>
      <button @click="subBtn4">异步-N</button>
      <h3>当前的Count值:{{$store.getters.showNum}}</h3>        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted(){
        
    },
    methods:{
        subBtn1(){
            //commit用于触发某个mutation
            this.$store.commit('sub')

        },
        subBtn2(){
            this.$store.commit('subN',3)

        },
        subBtn3(){
            //dispatch用于触发某个action
            this.$store.dispatch('subAsync')

        },
        subBtn4(){
            this.$store.dispatch('subNAsync',5)

        },
        
    },
}
</script>
<style lang="css" scoped>
    
</style>