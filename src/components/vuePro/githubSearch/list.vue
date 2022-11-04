<!-- 此处标记页面 -->
<template>
    <div class=''>
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text">{{user.login}}</p>
		</div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[] 
            },


            a1:[1,2,3],
            b1:[2,3,4,5],
            a:{
                aa:'xx',
                bb:'cc',
            },
            b:{
                bb:'mm',
                cc:'dd'
            }
            
        }
    },
    mounted(){
        this.$bus.$on('updateListData',data=>{
            this.info={...this.info,...data}
        })
        
        console.log('测试1',[...this.a1,...this.b1]); //两个数组合并时,重复的都会算在数组中,不会去重
        console.log('测试2',{...this.a,...this.b}); //两个对象合并时,有重复的key时,只会保留后面对象的那个
    },
    methods:{
        
    },
}
</script>
<style lang="css" scoped>
    .card {
		float: left;
		width: 20%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}
</style>