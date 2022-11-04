<!-- 此处标记页面 -->
<template>
    <div class='course'>
        <el-button @click="sendCourseName">点我获取子组件course中的courseName</el-button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            courseName:'前端课程',
            
        }
    },
    mounted(){
        
    },
    methods:{
        sendCourseName(){
            console.log("子组件发送课程名称",this.courseName);
            this.$emit("demo",this.courseName)
        }
        
    },
}
</script>
<style lang="css" scoped>
    
</style>