import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import *as echarts from 'echarts'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts;

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
