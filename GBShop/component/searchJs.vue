<template>
	<view class="search">
		<image class="img" src="../static/sc_search_ic_search@3x.png"></image>
		<input class="input" placeholder="搜索图书" type="text" placeholder-style="font-size:14px;" confirm-type="search"
		 @input="onkey" />
	</view>
</template>

<script>
	export default{
		// props:{searchInfo:"placeholder"},
		methods: {
			onkey:function(event){
				console.log(event.target.value)
				this.searchText = event.target.value
				this.$emit("send",this.searchText)
			}
		}
	}
</script>

<style>
	/* 搜索 */
	.search{
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
	}
</style>
