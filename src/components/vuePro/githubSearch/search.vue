<!-- 此处标记页面 -->
<template>
    <div class=''>
        <h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<el-input style="width:250px" type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
			<el-button @click="searchUsers">Search</el-button>
		</div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            keyWord:'',
            transmitData:{
                isLoading:'',
                errMsg:'',
                users:[],
                isFirst:false
            }
        }
    },
    mounted(){
        
    },
    methods:{
        searchUsers(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(res=>{
                console.log('请求成功!');
                console.log(res.data);
                this.transmitData={
                    isLoading:false,
                    errMsg:'',
                    users:res.data.items,
                    isFirst:false
                }
                this.$bus.$emit('updateListData',this.transmitData)
            },
            err=>{
                this.transmitData={
                    isLoading:false,
                    errMsg:err.message,
                    users:[],
                    isFirst:false
                }
                this.$bus.$emit('updateListData',this.transmitData)
                console.log('请求失败',err);
            })
        }
    },
}
</script>
<style lang="css" scoped>
    
</style>