
export default {
    install(Vue,x){
        console.log(x);
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 定义一个混入
        Vue.mixin({
            data(){
                return {
                    xxx:'张三',

                }
            },
            method(){

            }
        })



    }

}