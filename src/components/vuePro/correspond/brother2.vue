<!-- 此处标记页面 -->
<template>
    <div class='brother2'>
        <!-- <h5>brother2名称: {{name}}</h5>
		<h5>brother2地址: {{address}}</h5> -->
        <h5>brother2地址: {{brother1}}</h5>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    data() {
        return {
            name:'brother222',
			address:'北京',

            brother1:''
        }
    },
    mounted(){
        this.pubId = pubsub.subscribe('send',(msgName,data)=>{
            console.log(data);
            this.brother1=data
        })
    },
    beforeDestroy() {
			//取消订阅
			pubsub.unsubscribe(this.pubId)
		},
    methods:{
        
    },
}
</script>
<style lang="css" scoped>
    
</style>