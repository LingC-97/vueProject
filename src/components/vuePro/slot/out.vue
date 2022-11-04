<!-- 此处标记页面 -->
<template>
    <div class='out'>
        <h3>1.默认插槽</h3>
        <div class='container'>
            <Category title="美食" >
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            </Category>

            <Category title="游戏" >
                <ul>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>
            </Category>

            <Category title="电影">
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            </Category>
        </div>
        <h3>2.具名插槽</h3>
        <div class='container'>
            <Category2 title="美食">
                <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
                <a slot="footer" href="http://www.atguigu.com">更多美食</a>
            </Category2>
            <Category2 title="游戏" >
                <ul slot="center">
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>
                <div class="foot" slot="footer">
				    <a href="http://www.atguigu.com">单机游戏</a>
				    <a href="http://www.atguigu.com">网络游戏</a>
			    </div>
            </Category2>
            <Category2 title="电影">
                <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
                <template v-slot:footer>
                    <div class="foot">
                        <a href="http://www.atguigu.com">经典</a>
                        <a href="http://www.atguigu.com">热门</a>
                        <a href="http://www.atguigu.com">推荐</a>
                    </div>
                </template>
            </Category2>
            
        </div>

        <h3>3.作用域插槽</h3>
        <!-- 注意:作用域插槽的列表数据是不在此页面的data中,所以新建个数据,不用下面的数据了 -->
        <div class="container">
            <Category3 title="餐品">
                <template scope="a">
                    <ul>
                        <li v-for="(item,index) in a.meals" :key="index">{{item}}</li>
                    </ul>
                </template>
                 
            </Category3>

            <Category3 title="餐品">
                <template scope="{meals}">
                    <ol>
                        <li v-for="(item,index) in meals" :key="index">{{item}}</li>
                    </ol>
                </template>                
            </Category3>

            <Category3 title="餐品">
                <template scope="{meals}">
                    <h4 v-for="(item,index) in meals" :key="index">{{item}}</h4>
                </template>
            </Category3>
  
        </div>
        
        
    </div>
</template>
<script>
import Category from './category.vue';
import Category2 from './category2.vue';
import Category3 from './category3.vue';

export default {
    data() {
        return {
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
        };
    },
    mounted() {
    },
    methods: {},
    components: { Category, Category2, Category3 }
}
</script>
<style lang="css" scoped>
 .container{
    display: flex;
    justify-content: space-around;
	}
    
</style>