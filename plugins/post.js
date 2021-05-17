export default {
	install: Vue => {
		// 通用post请求函数
		Vue.prototype.$post = (url, param, successMessage = '操作成功', isShowLoading = true, methodType = 'post') => {
			return new Promise((resolve, reject) => {
				let params = {
					...param
				}
				if (isShowLoading) {
					uni.showNavigationBarLoading()
				}

				uni.request({
					url: url,
					data: params,
					method: methodType,
					success: (res) => {
						if (res.data.resultCode === '00') {
							resolve(res.data.resultData)
							if (successMessage !== '') {
								uni.showToast({
									title: successMessage,
									duration: 2000
								})
							}
						} else {
							uni.showToast({
								title: res.data.resultMsg,
								icon: 'none',
								duration: 2000
							})
							reject(res.data.resultMsg)
						}
						uni.hideNavigationBarLoading()
					},
					fail: (error) => {
						uni.showToast({
							title: '系统出错',
							icon: 'none',
							duration: 2000
						})
						uni.hideLoading();
						reject(error)
					}
				})
			})
		}
	}
}
