<!-- 此处标记页面 -->
<template>
    <div class=''>
        parmas 参数携带
        <ul>
		    <li>消息编号：{{$route.params.id}}</li>
		    <li>消息标题：{{$route.params.title}}</li>
	    </ul>
        query 参数携带
        <ul>
		    <li>消息编号：{{$route.query.id}}</li>
		    <li>消息标题：{{$route.query.title}}</li>
	    </ul>
        props 接收
        <ul>
		    <li>消息编号：{{id}}</li>
		    <li>消息标题：{{title}}</li>
	    </ul>
    </div>
</template>
<script>
export default {
    props:['id','title'],
    data() {
        return {
            
        }
    },
    mounted(){
        
    },
    methods:{
        
    },
}
</script>
<style lang="css" scoped>
    
</style>