const MenuRouter = [
    // {// 首页
    //     name:'login',
    //     path: '/',
    //     meta: { title: '首页' },
    //     component: () => import('@/Home/login.vue')
    // },
    {// vue学习/条件渲染
        name:'showCondition',
        path: '/home/showCondition',
        meta: { title: '列表渲染' },
        component: () => import('@/components/vuePro/showCondition.vue')
    },
    {// vue学习/列表渲染
        name:'showList',
        path: '/home/showList',
        meta: { title: '列表渲染' },
        component: () => import('@/components/vuePro/showList.vue')
    },
    {// vue学习/组件通信
        name:'correspond',
        path: '/home/correspond',
        meta: { title: '组件通信' },
        component: () => import('@/components/vuePro/correspond/school.vue')
    },
    {// vue学习/使用插件
        name:'plugins',
        path: '/home/plugins',
        meta: { title: '组件通信' },
        component: () => import('@/components/vuePro/showPlugins.vue')
    },
    {// vue学习/插槽
        name:'slot',
        path: '/home/slot',
        meta: { title: '插槽' },
        component: () => import('@/components/vuePro/slot/out.vue')
    },
    {// vue学习/跨域
        name:'crossDomain',
        path: '/home/simpleExample',
        meta: { title: '跨域' },
        component: () => import('@/components/vuePro/crossDomain/simpleExample.vue')
    },
    {// vue学习/搜索案例
        name:'crossDomain',
        path: '/home/search',
        meta: { title: '跨域' },
        component: () => import('@/components/vuePro/githubSearch/container.vue')
    },
    {// vue学习/路由
        name:'crossDomain',
        path: '/home/myRoute',
        meta: { title: '跨域' },
        component: () => import('@/components/vuePro/myRoute/out.vue'),
        children:[
        {
            name:'about',
            path:'/home/myRoute/about',
            component: () => import('@/components/vuePro/myRoute/about.vue' ), 
            
        },
        {
            path:'/home/myRoute/home2',
            component: () => import('@/components/vuePro/myRoute/home2.vue' ), 
            children:[
            {
                path:'/home/myRoute/home2/news',
                component: () => import('@/components/vuePro/myRoute/news.vue' ), 

            },
            {
                path:'/home/myRoute/home2/message',
                component: () => import('@/components/vuePro/myRoute/message.vue' ), 

                children:[
                {
                    name:'xiangqing',
                    path:'/home/myRoute/home2/message/detail/:id/:title',
                    component: () => import('@/components/vuePro/myRoute/detail.vue' ), 
                    //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                    // props:{a:1,b:'hello'}

                    //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                    // props:true

                    //props的第三种写法，值为函数
                    props($route){
                        return {
                            id:$route.params.id,
                            title:$route.params.title,
                            a:1,
                            b:'hello'
                        }
                    }
                },
                {
                    name:'xiangqing2',
                    path:'/home/myRoute/home2/message/detail2',
                    component: () => import('@/components/vuePro/myRoute/detail.vue' ), 
                    props($route){
                        return {
                            id:$route.query.id,
                            title:$route.query.title,
                            a:1,
                            b:'hello'
                        }
                    }
                },
               
                ]
            }
            ]
        },
    ]
    },




    {// vuex学习/state
        name:'state',
        path: '/home/state',
        meta: { title: 'state' },
        component: () => import('@/components/vuexPro/Add.vue')
    },
    {// vuex学习/mutation
        name:'mutation',
        path: '/home/mutation',
        meta: { title: 'state' },
        component: () => import('@/components/vuexPro/Sub.vue')
    },

]
export default MenuRouter
