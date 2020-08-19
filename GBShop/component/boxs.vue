<template>
	<view> 
		<block v-for="(item,index) in reciveboxInfo" :key="index">
			<view class="box">
				<image class="lineImg" :src="item.imgurl"></image>
				<text class="line-title">{{item.title}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:["reciveboxInfo"]
	}
</script>
	
<style>
	.box{
		line-height: 100rpx;
		display: flex;
		justify-content: center; /* 水平居中 */
		align-items: center; /* 垂直居中 */
	}
	.lineImg{
		margin-right: 10rpx;
		width: 40rpx;
		height: 40rpx;
	}
	.line-title{
		font-size: 40rpx;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: #527e69;
	}
</style>
