<template>
	<view>
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" scale='3' :show-location="true" @poitap="poitap"
					:style='{"height":calcHeight+"px"}' id="map1" ref="map1" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				mapCtx:null,
				calcHeight: '300',
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					id: 1,
					latitude: 39.9085,
					longitude: 116.39747,
					// #ifdef APP-PLUS
					iconPath: '../../../static/images/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '../../../static/images/location.png',
					// #endif
				}]
			}
		},
		onLoad(){
			this.mapCtx = uni.createMapContext('map1', this)
			this.getAuthorizeInfo()
		},
		mounted() {
			let _this = this
			uni.getSystemInfo({
				success: function(res) {
					_this.calcHeight = res.windowHeight
					// #ifdef H5
					_this.calcHeight = res.windowHeight - 30
					// #endif
				}
			})
		},
		methods: {
			// 位置授权
			getAuthorizeInfo() {
				let self = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() { // 允许授权
						self.getLocationInfo();
					},
					fail() { // 拒绝授权
						self.openConfirm();
						console.log("你拒绝了授权，无法获得周边信息")
					}
				})
			},
			// 获取地理位置
			getLocationInfo() {
				let self = this
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						console.log(res, "当前位置");
						// 移动到当前位置
						self.toLocation(res)
						self.latitude = res.latitude;
						self.longitude = res.longitude;
					}
				});
			},
			// 再次获取授权
			// 当用户第一次拒绝后再次请求授权
			openConfirm() {
				uni.showModal({
					title: '请求授权当前位置',
					content: '需要获取您的地理位置，请确认授权',
					success: (res) => {
						if (res.confirm) {
							uni.openSetting(); // 打开地图权限设置
						} else if (res.cancel) {
							uni.showToast({
								title: '你拒绝了授权，无法获得周边信息',
								icon: 'none',
								duration: 1000
							})
						}
					}
				});
			},
			toLocation: function(obj) {
				// 改变地图中心位置
				this.mapCtx.moveToLocation(obj)
				// 移动标记点并添加动画效果
				this.mapCtx.translateMarker({
					markerId: 1,
					autoRotate: false,
					duration: 100,
					destination: {
						latitude: obj.latitude,
						longitude: obj.longitude,
					},
					animationEnd() {
						console.log('animation end')
					}
				})
			},
			openConfirm() {
				uni.showModal({
					title: '请求授权当前位置',
					content: '需要获取您的地理位置，请确认授权',
					success: (res) => {
						if (res.confirm) {
							uni.openSetting(); // 打开地图权限设置
						} else if (res.cancel) {
							uni.showToast({
								title: '你拒绝了授权，无法获得周边信息',
								icon: 'none',
								duration: 1000
							})
						}
					}
				});
			},
			poitap(e) {
				console.log(e, "poitap")
				var obj = e.detail
				this.toLocation(obj)
			},
		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600rpx;
	}
</style>
