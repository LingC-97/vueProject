<!-- 此处标记页面 -->
<template>
    <div class=''>
        <!-- <h3>子传父 </h3> -->
        <el-button @click="sendTeacherName">点我发送子组件(教师)的姓名给父组件</el-button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            teacherName:'张老师',
            
        }
    },
    props:['getTeacherName'],
    mounted(){
        
    },
    methods:{
        sendTeacherName(){
            this.getTeacherName(this.teacherName)
        }
        
    },
}
</script>
<style lang="css" scoped>
    
</style>