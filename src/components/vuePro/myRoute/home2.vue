<!-- 此处标记页面 -->
<template>
    <div class=''>
        <h2>Home组件内容</h2>
        <div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/myRoute/home2/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/myRoute/home2/message">Message</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
    </div>
</template>
<script>
export default {

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