<!-- 此处标记页面 -->
<template>
    <div class='student'>
        <div>{{schoolName}}</div>   <!--直接用schoolName就可以或者添加一个方法  --> 
        
        <el-button @click="getSchoolName">点我获取父组件(学校)的姓名</el-button>
        <div v-if=flag>{{schoolName}}</div>
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:false,

            
        }
    },
    props:['schoolName'],
    mounted(){
        
    },
    methods:{
        getSchoolName(){
            this.flag=true
            console.log(this.schoolName);
        }
        
    },
}
</script>
<style lang="css" scoped>
    
</style>