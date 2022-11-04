<!-- 此处标记页面 -->
<template>
    <div class='category'>
        <h3>{{title}}分类</h3>
        <slot :meals="meals" ></slot>

        
    </div>
</template>
<script>
export default {
    name:'Category3',
    props:['title'],
    data() {
        return {
            meals:['牛肉火锅','海鲜大排档','涮涮锅','牛角日本烧肉']
            
        }
    },
    mounted(){
        
    },
    methods:{
        
    },
}
</script>
<style lang="css" scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
video{
    width: 100%;
}
img{
    width: 100%;
}
</style>