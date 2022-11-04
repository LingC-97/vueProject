import { subset } from 'semver'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0,
        //菜单信息
        userInfo: { menus: [] },
    },
    mutations:{
        //只有mutations才有权利修改state中的数据
        sub(state){
            state.count--
        },
        subN(state,step){
            state.count-=step
        },

        add(state){
            state.count++
        },
        addN(state,step){
            state.count+=step
        },

    },
    actions:{
        //不能直接修改state中的数据,只能通过触发matations中的方法进行修改state中数据
                subAsync(context){
            setTimeout(()=>{
                context.commit('sub')
            },1000)
        },
        subNAsync(context,step){
            setTimeout(()=>{
                context.commit('subN',step)
            },1000)
        },
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },1000)
        },
        addNAsync(context,step){
            setTimeout(()=>{
                context.commit('addN',step)
            },1000)
        },
    },
    getters:{
        showNum(state){
            return '当前最新的数量是['+state.count+']'
        },
        getMenu:(state)=>{
            return state.userInfo.menus
        },
    },


})
