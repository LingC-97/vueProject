const menuList=[
    {
    "id": 1,
    "name": "vue学习.",
    "title": "",
    "icon": "icon-changjingguanli",
    "url": "/home",
    "pid": null,
    "type": null,
    "sort": 1,
    "remark": null,
        "childMenus": [
        {
            "id": 3,
            "name": "列表渲染",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/showList",
            "pid": 1,
            "type": null,
            "sort": 2,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 4,
            "name": "条件渲染",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/showCondition",
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 5,
            "name": "组件通信",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/correspond",
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 6,
            "name": "使用插件",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/plugins",
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 7,
            "name": "插槽",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/slot",
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 8,
            "name": "跨域",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/simpleExample",   //这个地方的url要和MenuRoute的path的地方保持一致,才能显现出页面
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 9,
            "name": "github搜索",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/search",   //这个地方的url要和MenuRoute的path的地方保持一致,才能显现出页面
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 10,
            "name": "myRoute",
            "title": "",
            "icon": "icon-shouye",
            "url": "/home/myRoute",   //这个地方的url要和MenuRoute的path的地方保持一致,才能显现出页面
            "pid": 1,
            "type": null,
            "sort": 3,
            "remark": null,
            
            "operates": [],
            "pname": null,
            // "childMenus":[
            //     {
            //         "id": 11,
            //         "name": "about",
            //         "title": "",
            //         "icon": "icon-shouye",
            //         "url": "'about",
            //         "pid": 10,
            //         "type": null,
            //         "sort": 1,
            //         "remark": null,
            //         "childMenus":null,
            //         "operates": [],
            //         "pname": null
            //     },
            // ],
        },
    ]
    },
    {
    "id": 2,
    "name": "vuex学习",
    "title": "",
    "icon": "icon-changjingguanli",
    "url": "/vuex",
    "pid": null,
    "type": null,
    "sort": 4,
    "remark": null,
        "childMenus": [
        {
            "id": 6,
            "name": "state",
            "title": "",
            "icon": "icon-shouye",
            "url": "state",
            "pid": 2,
            "type": null,
            "sort": 1,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
        {
            "id": 7,
            "name": "mutation",
            "title": "",
            "icon": "icon-shouye",
            "url": "mutation",
            "pid": 2,
            "type": null,
            "sort": 1,
            "remark": null,
            "childMenus":null,
            "operates": [],
            "pname": null
        },
    ]
    }
]

export {menuList}