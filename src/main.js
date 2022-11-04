import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
//如果全局引用就下面这两句话
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//按需引入:这里是直接写的一个文件,把文件的内容放这也可以
// import './utils/element'
import plugins from './utils/plugins';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(plugins,88)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //使用evenbus全局事件总线实现兄弟传参
  }
}).$mount('#app')
