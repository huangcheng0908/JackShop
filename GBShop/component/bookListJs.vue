<template>
	<view>
		<block v-for="(item,index) in receiceBookInfo" :key="index">
			<view class="bookcol">
				<view class="bookcol-img">
					<image class="son-img" :src="item.imageURL"></image>
				</view>
				<view class="book-title">{{item.title}}.</view>
				<view class="book-price">￥{{item.price}}</view>
				<view class="book-oprice">￥{{item.oprice}}</view>
			</view>
		</block>
	</view>
</template>
	
<script>
	export default{
		props:["receiceBookInfo"],
	}
</script>

<style lang="scss">
	/* 书列表 */
	.bookcol{
		display: inline-block;
		margin-left: 30rpx;
		margin-top: 40rpx;
		width: 168rpx;
		vertical-align: top; /* 靠上对齐 */
	}
	.bookcol-img{
		width: 168rpx;
		height: 240rpx;
	}
	.son-img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
	.book-title{
		margin-top: 15rpx;
		width: 100%;
		color: #333333;
		font-size: 14px;
		white-space: pre-line; /* view的文字自动换行 不会保留空白和tabs） */
		// white-space:pre-wrap; /* （会保留空白和tabs） */
		overflow: hidden;  /* 超出一行文字自动隐藏 */
		text-overflow: ellipsis; /* 超出一行文字自动隐藏 */
	}
	.book-price{
		margin-top: 8rpx;
		color: #FF6E06;
		font-size: 12px;
	}
	.book-oprice{
		color: #999999;
		font-size: 14px;
		text-decoration: line-through;
	}
</style>
