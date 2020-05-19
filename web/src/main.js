import Vue from 'vue'
import App from './App.vue'

import './assets/style/style.styl'
import './assets/iconfont/iconfont.css'
import router from './router'

import ListCard from './components/ListCard'
import Card from './components/Card'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.component('MListCard', ListCard)
Vue.component('MCard', Card)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
