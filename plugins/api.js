import * as api from '@/axios/index.js'
export default {
	install: Vue => {
		Vue.prototype.$API = api
	}
}
