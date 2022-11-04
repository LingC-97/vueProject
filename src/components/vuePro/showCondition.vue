<!-- 此处标记页面 -->
<template>
    <div class=''>
        <h3>条件渲染</h3>
        <!-- v-if的使用 -->
        <el-button  @click="change">点我{{info}}姓名</el-button>
        
        <h4 v-if="control">{{name}}</h4>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"小明",
            control:false,
            
        }
    },
    mounted(){
        
    },
    computed:{
        info(){
            return this.control ? '隐藏' : '显示'
        }
	},
    methods:{
        change(){            
            this.control= !this.control;
        }
    }
}
</script>
<style lang="css" scoped>
    
</style>