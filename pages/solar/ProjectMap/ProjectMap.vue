<template>
	<view>
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" :markers="covers" :style='{"height":calcHeight+"px"}'>
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				calcHeight:'300',
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
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
		},
		methods: {

		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 600rpx;
	}
</style>
