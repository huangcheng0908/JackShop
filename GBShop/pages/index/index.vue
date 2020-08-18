<template>
	
	<view >
		<!-- 搜索 -->
		<searchJs @send="getSearchText"></searchJs>
		
		<view class="swip">
			<swiper indicator-dots="true" indicator-color="#fff"
			indicator-active-color="#F5C265" autoplay="true">
				<swiper-item>
					<image class="swImg" src="../../static/image/banner1@3x.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swImg" src="../../static/image/banner1@3x.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swImg" src="../../static/image/banner1@3x.png"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="box1">
			<view class="box-item" v-for="(item,index) in banImages" :key="index">
				<image class="box-img" :src="item.URL"></image>
				<text class="box-title">{{item.text}}</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	import searchJs from "../../component/searchJs.vue"
	export default {
		data() {
			return {
				// placeholder:"搜索图书",
				searchText:"",
				banImages:[
					{
						text:"畅销榜",
						URL:"../../static/image/sc_ic_cxb@3x.png"
					},
					{
						text:"新书榜",
						URL:"../../static/image/sc_ic_xsb@3x.png"
					},
					{
						text:"特价区",
						URL:"../../static/image/sc_ic_tjq@3x.png"
					},
					{
						text:"秒杀区",
						URL:"../../static/image/sc_ic_msq@3x.png"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			getSearchText:function(res){
				console.log(res)
			}
		},
		components:{
			searchJs
		}
	}
</script>

<style>
	/* 搜索 */
	/* .search{
		background-color: rgba(82,126,105,0.11);
		height: 72rpx;
		margin-top: 14rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 36rpx;
		display: flex;
		flex-direction: row;
	}
	.img{
		width: 32rpx;
		height: 32rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	.input{
		margin-left: 20rpx;
		margin-right: 30rpx;
		height: 72rpx;
		width: 100%;
		color: #AAAAAA;
		font-size: 16px;
	} */
	
	/* banner */
	.swip{
		margin-top: 14rpx;
		height: 250rpx;
	}
	.swImg{
		width: 100%;
		height: 100%;
	}
	
	/* 畅销榜/新书榜/特价区/秒杀区 */
	.box1{
		display: flex;
		flex-direction: row;
		height: 280rpx;
		/* background-color: #007AFF; */
	}
	.box-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 250rpx;
	}
	.box-img{
		margin-top: 100rpx;
		width: 96rpx;
		height: 96rpx;
	}
	.box-title{
		margin-top: 20rpx;
		color: #333333;
		font-size: 28rpx;
	}
	
</style>
