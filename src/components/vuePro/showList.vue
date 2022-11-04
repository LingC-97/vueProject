<!-- 此处标记页面 -->
<template>
    <div class=''>
        <h2>列表渲染</h2>
        <!-- v-for的使用 -->
        <div>
            <!-- 遍历数组 -->
            <h3>人员信息</h3>
            <ul>
                <li v-for="(value,key) of persons" :key="key">
                    {{key}}-{{value.name}}
                </li>
            </ul>
            <!-- 遍历对象 -->
            <h3>汽车信息</h3>
            <ul>
                <li v-for="(value,key) of car" :key="key">
                    {{key}}-{{value}}
                </li>
            </ul>
            
            

        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            persons:[
                {id:'001',name:'张三',age:18},
                {id:'002',name:'李四',age:19},
                {id:'003',name:'王五',age:20}
					],
            car:{
                name:'奥迪A8',
                price:'70万',
                color:'黑色'
            },
            
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