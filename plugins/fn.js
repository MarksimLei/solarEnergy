export default {
	install:Vue =>{
		Vue.prototype.l = (...args)=>{
			console.log('log hook:',...args)
		}
		Vue.prototype.i = (...args)=>{
			console.info('info hook:',...args)
		}
		Vue.prototype.e = (...args)=>{
			console.error('error hook:',...args)
		}
	}
}