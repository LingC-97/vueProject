<!-- 此处标记页面 -->
<template>
    <div class='employee'>
        <el-button @click="sendEmployeeName">点我获取雇员名称</el-button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            employeeName:"张三雇员",
            
        }
    },
    mounted(){
        
    },
    methods:{
        sendEmployeeName(){
            console.log("子组件发送employeeName",this.employeeName);
            this.$emit("demoName",this.employeeName)
        }
    },
}
</script>
<style lang="css" scoped>
    
</style>