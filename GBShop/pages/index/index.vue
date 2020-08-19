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
		
		<boxs :reciveboxInfo="boxInfo"> </boxs>
		
		<view class="second">
			<uni-countdown :showColon="false" color="#FFFFFF" background-color="#527E69" border-color="#527E69" :show-day="false" :hour="2" :minute="30" :second="0"></uni-countdown>
		</view>
		
		<view>
			<scroll-view scroll-x="true" class="box-list">
				<view class="bookcol">
					<view class="bookcol-img">
						<image class="son-img" src="../../static/image/banner1@3x.png"></image>
					</view>
					<view class="book-title">追风筝的人...追风筝的人...</view>
					<view class="book-price">￥12</view>
					<view class="book-oprice">￥128</view>
				</view>
				
				<view class="bookcol">
					<view class="bookcol-img">
						<image class="son-img" src="../../static/image/banner1@3x.png"></image>
					</view>
					<view class="book-title">追风筝的人...追风筝的人...</view>
					<view class="book-price">￥12</view>
					<view class="book-oprice">￥128</view>
				</view>
				
				<view class="bookcol">
					<view class="bookcol-img">
						<image class="son-img" src="../../static/image/banner1@3x.png"></image>
					</view>
					<view class="book-title">追风筝的人...追风筝的人...</view>
					<view class="book-price">￥12</view>
					<view class="book-oprice">￥128</view>
				</view>
				
				<view class="bookcol">
					<view class="bookcol-img">
						<image class="son-img" src="../../static/image/banner1@3x.png"></image>
					</view>
					<view class="book-title">追风筝的人...追风筝的人...地对地导弹地对地导弹多大的</view>
					<view class="book-price">￥12</view>
					<view class="book-oprice">￥128</view>
				</view>
				
			</scroll-view>
		</view>
		
		
	</view>
	
</template>

<script>
	import searchJs from "../../component/searchJs.vue"
	import boxs from "../../component/boxs.vue"
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
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
				],
				boxInfo:[
					{
					imgurl:"../../static/image/sc_ic_clock@3x.png",
					title:"每日秒杀"
				}]
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
			searchJs,boxs,uniCountdown
		}
	}
</script>

<style lang="scss">
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
		margin-top: 50px;
		width: 96rpx;
		height: 96rpx;
	}
	.box-title{
		margin-top: 20rpx;
		color: #333333;
		font-size: 28rpx;
	}
	
	.second{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	/* 书列表 */
	.box-list{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.bookcol{
		display: inline-block;
		margin-left: 30rpx;
		margin-top: 40rpx;
		width: 168rpx;
	}
	.bookcol-img{
		width: 168rpx;
		height: 240rpx;
	}
	.son-img{
		width: 100%;
		height: 100%;
	}
	.book-title{
		margin-top: 15rpx;
		width: 100%;
		height: 80rpx;
		color: #333333;
		font-size: 14px;
		white-space: pre-line; /* view的文字自动换行 不会保留空白和tabs） */
		// white-space:pre-wrap; /* （会保留空白和tabs） */
		overflow: hidden;  /* 超出一行文字自动隐藏 */
		text-overflow: ellipsis; /* 超出一行文字自动隐藏 */
	}
	.book-price{
		color: #FF6E06;
		font-size: 12px;
	}
	.book-oprice{
		color: #999999;
		font-size: 14px;
		text-decoration: line-through;
	}
</style>
