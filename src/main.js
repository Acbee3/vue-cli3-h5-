import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入移动端适配
import 'lib-flexible/flexible.js'

// 引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import '@/assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入样式初始化
import '@/assets/css/reset.css'

// 引入fastClick ==> 解决移动端click事件 300ms 延迟的问题
import fastClick from 'fastclick'
fastClick.attach(document.body)

// 引入字体图标
import '@/assets/fonts/iconfont.css'

Vue.prototype.axios = axios

Vue.config.productionTip = false

// 不能在全局引 会自动编译为CSS 变量就不能用了
// import '@/assets/css/public.styl'

window.onresize = setHtmlFontSize();
function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  console.log(htmlWidth);
}
// setHtmlFontSize();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
