<template>
	<view>
		<view class="uni-common-mt">
			<view>
				<!-- @tap='tap' @markertap='tab1'
				@labeltap='tap2' @anchorpointtap='tab3'
				@poitap='tap4' :markers="covers"-->
				<map :latitude="latitude" :longitude="longitude" scale='3' 
				:show-location="true"
					:style='{"height":calcHeight+"px"}' id="map1" ref="map1">
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
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
				}, {
					latitude: 39.90,
					longitude: 116.39,
					// #ifdef APP-PLUS
					iconPath: '../../../static/images/app-plus/location@3x.png',
					// #endif
					// #ifndef APP-PLUS
					iconPath: '../../../static/images/location.png',
					// #endif
				}]
			}
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
			let mapContext = uni.createMapContext('map1', this)
			// mapContext.moveToLocation({
			// 	latitude: 26.07421,
			// 	longitude: 119.29647,
			// 	success: e => {
			// 		console.log('moveToLocation', e)
			// 	}
			// })
			
			// mapContext.translateMarker({
			// 	markerId: 1,
			// 	destination: {
			// 		latitude: 26.07421,
			// 		longitude: 119.29647,
			// 	},
			// 	autoRotate: true,
			// 	duration: 100,
			// 	success: e => {
			// 		console.log('translateMarker', e)
			// 	}
			// })

			// uni.openLocation({
			// 	latitude: 26.07421,
			// 	longitude: 119.29647,
			// 	success:e=>{
			// 		console.log('openLocation',e)
			// 	}
			// })
			// uni.getLocation({
			// 	type: 'gcj02',
			// 	success(e) {
			// 		const latitude = e.latitude;
			// 		const longitude = e.longitude;

			// 		// _this.l('getLocation',e)
			// 		// mapContext.moveToLocation({
			// 		// 	latitude : e.latitude,
			// 		// 	longitude : e.longitude,
			// 		// 	success:e=>{
			// 		// 		_this.l('moveToLocation',{mapContext,e})
			// 		// 		mapContext.translateMarker({
			// 		// 			markerId:12345,
			// 		// 			destination:{
			// 		// 				latitude : e.latitude,
			// 		// 				longitude : e.longitude,
			// 		// 			},
			// 		// 			success:e=>{
			// 		// 				_this.l('translateMarker',{e})
			// 		// 			}
			// 		// 		})
			// 		// 	}
			// 		// })
			// 	}
			// })
		},
		methods: {
			tap(e) {
				this.l('tap', e)
				let _this = this

				uni.chooseLocation({
					success: function(e) {
						_this.l('chooseLocation', e)
					}
				})
			},
			tap1(e) {
				this.l('tap1', e)
			},
			tap2(e) {
				this.l('tap2', e)
			},
			tap3(e) {
				this.l('tap3', e)
			},
			tap4(e) {
				this.l('tap4', e)
			}
		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600rpx;
	}
</style>
