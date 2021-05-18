export default {
	install:Vue =>{
		Vue.prototype.l = (...args)=>{
			console.log('log hook:',...args)
			console.log(new Error().stack.split(/\n/g)[2])
		}
		Vue.prototype.i = (...args)=>{
			console.info('info hook:',...args)
			console.log(new Error().stack.split(/\n/g)[2])
		}
		Vue.prototype.e = (...args)=>{
			console.error('error hook:',...args)
		}
	}
}