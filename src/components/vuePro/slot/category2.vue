<!-- 此处标记页面 -->
<template>
    <div>
             
        <div class='category'>
            <h3>{{title}}分类</h3>
            
            <slot name="center"></slot>
            <slot name="footer"></slot>
        </div>

    </div>
</template>
<script>
export default {
    name:'Category2',
	props:['title'],
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