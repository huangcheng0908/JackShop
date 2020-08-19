<template>
	<view>
		<view class="like">
			<block v-for="(item,index) in receiveLikeInfos" :key="index">
				<view class="box-like" @click="onclickItem(index)">
					<view class="like-img">
						<image class="like-item-img" src="../static/image/banner1@3x.png"></image>
					</view>
					<view class="like-title">图书名和图书内容介绍最多可以显示两行...</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:["receiveLikeInfos"],
		methods:{
			onclickItem:function(res){
				this.$emit("onclickItem",res)
			}
		}
	}
</script>

<style>
	.like{
		background-color: #F8F8F8; 
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.box-like{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 335rpx;
		background-color: #FFFFFF;
		border-radius: 2px;
		margin-left: 30rpx;
		margin-bottom: 30rpx;
	}
	.like-img{
		margin-top: 40rpx;
		width: 168rpx;
		height: 240rpx;
	}
	.like-item-img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
	.like-title{
		margin-top: 32rpx;
		color: #333333;
		font-size: 14px;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-bottom: 24rpx;
		line-height: 40rpx;
	}
</style>
