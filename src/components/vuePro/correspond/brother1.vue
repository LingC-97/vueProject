<!-- 此处标记页面 -->
<template>
    <div class='brother1'>
        <!-- brother1 给brother2传参数 -->
        <!-- <h5>brother1姓名: {{name}}</h5>
		<h5>brother1性别: {{sex}}</h5> -->
		<el-button @click="sendStudentName">把brother1名给brother2组件</el-button>
        
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    data() {
        return {
            name: 'brother111',
            sex: '男'
        }
    },
    mounted(){
        
    },
    methods:{
        sendStudentName(){
            pubsub.publish('send',this.name)
        }
    },
}
</script>
<style lang="css" scoped>
    
</style>