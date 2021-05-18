import Vue from 'vue'
import App from './App'
import store from '@/store'
import post from '@/plugins/post.js'
import api from '@/plugins/api.js'
import fn from '@/plugins/fn.js'
Vue.use(post) // this.$post(url, param, successMessage = '操作成功', isShowLoading = true, methodType = 'post')
Vue.use(api) // this.$API.xxxx
Vue.use(fn) // this.l,this.i,this.e
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
