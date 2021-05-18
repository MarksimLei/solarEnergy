<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" open-type="reLaunch" url="/pages/component/view/view">
				<image src="../static/images/logo.png" mode="heightFix" style="width: 30px;"></image>
				<text>hello uni-app</text>
			</navigator>
		</view>
		<custom-tab-bar class="tab-bar-flex" direction="horizontal" :show-icon="false" :selected="current" @onTabItemTap="toSecondMenu" />
		<button type="default" plain size="mini" @click="submitForm">退出登录</button>
	</view>
</template>

<script>
	import {
			mapMutations
		} from 'vuex'
	export default {
		data() {
			return {
				selected: {
					solar: 0,
					electric: 1,
					storage: 2,
				},
				current: 0,

				indexPage: [{
					tabBar: '/pages/tabBar/solar/solar',
					index:  '/pages/solar/Authority/Authority'
				}, {
					tabBar: '/pages/tabBar/electric/electric',
					index: '/pages/electric/about/about'
				}, {
					tabBar: '/pages/tabBar/storage/storage',
					index: '/pages/storage/ucharts/ucharts'
				}]
			}
		},
		props: {
			matchLeftWindow: {
				type: Boolean
			},
			showLeftWindow: {
				type: Boolean
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(newRoute) {
					this.l('this.showLeftWindow',this.showLeftWindow)
					if ( this.showLeftWindow ) {
						let comp = newRoute.path.split('/')[2]
							this.current = this.selected[comp]
							
						for(const item of this.indexPage) {
							if (newRoute.path === item.tabBar) {
								uni.redirectTo({
									url: item.index
								})
							}
						}
					}
				}
			}
		},
		mounted() {
		},
		methods: {
			...mapMutations(['login', 'logout']),
			toSecondMenu(e) {
				const activeTabBar = '/' + e.pagePath
				for(const item of this.indexPage) {
					if (activeTabBar === item.tabBar) {
						uni.redirectTo({
							url: item.index
						})
					}
				}
			},
			submitForm(){
				uni.redirectTo({
					url: '/'
				})
				this.logout()
			}
		}
	}
</script>

<style>
	.top-window-header {
		height: 60px;
		padding: 0 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #e1e1e1;
		background-color: #FFFFFF;
		color: #333;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.logo image {
		height: 30px;
		width: 30px;
	}
	.logo text {
		margin-left: 8px;
	}
	.right-header {
		display: flex;
		flex-direction: row;
		color: #333;
	}
	.right-header-item {
		line-height: 25px;
		margin-left: 40px;
		cursor: pointer;
		font-size: 16px;
	}
	.active {
		color: #4cd964;
		border-bottom: 2px solid;
	}
	.tab-bar-flex {
		width: 360px;
	}
	.phone-link {
		padding-left: 20px;
		cursor: pointer;
	}
</style>
