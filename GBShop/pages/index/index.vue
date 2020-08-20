//
//                  ___====-_  _-====___
//            _--^^^#####//      \\#####^^^--_
//         _-^##########// (    ) \\##########^-_
//        -############//  |\^^/|  \\############-
//      _/############//   (@::@)   \############\_
//     /#############((     \\//     ))#############\
//    -###############\\    (oo)    //###############-
//   -#################\\  / VV \  //#################-
//  -###################\\/      \//###################-
// _#/|##########/\######(   /\   )######/\##########|\#_
// |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
// `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
//    `   `  `      `   / | |  | | \   '      '  '   '
//                     (  | |  | |  )
//                    __\ | |  | | /__
//                   (vvv(VVV)(VVV)vvv)
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               神兽保佑            永无BUG

<template>

	<view>
		<!-- 搜索 -->
		<searchJs @send="getSearchText"></searchJs>

		<view class="swip">
			<swiper indicator-dots="true" indicator-color="#fff" indicator-active-color="#F5C265" autoplay="true">
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
			<uni-countdown :showColon="false" color="#FFFFFF" background-color="#527E69" border-color="#527E69" :show-day="false"
			 :hour="2" :minute="30" :second="0"></uni-countdown>
		</view>

		<view>
			<scroll-view scroll-x="true" class="box-list">
				<bookListJs :receiceBookInfo="bookseconInfo"></bookListJs>
			</scroll-view>
		</view>

		<view>
			<boxs :reciveboxInfo="boxInfo1"> </boxs>
		</view>

		<view>
			<uni-grid :column="3" :show-border="false" :square="false">
				<view class="grid-items" v-for="(item,index) in gridList" :key="index" @click="onchange(index)">
					<uni-grid-item>
						<image class="grid-img" :src="item.imgUrl"></image>
					</uni-grid-item>
				</view>
			</uni-grid>
		</view>
		
		<view>
			<boxs :reciveboxInfo="boxInfo2" style="background-color: #F8F8F8;"> </boxs>
		</view>
		<bookLikeJs :receiveLikeInfos="booklikeinfos" @onclickItem="onclickItem"></bookLikeJs>
		<view style="height: 40rpx;background-color: #F8F8F8;"></view>

	</view>

</template>

<script>
	import api from "../../network/api.js"
	import searchJs from "../../component/searchJs.vue"
	import boxs from "../../component/boxs.vue"
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	import bookListJs from "../../component/bookListJs.vue"
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import bookLikeJs from "../../component/bookLikeJs.vue"

	export default {
		data() {
			return {
				// placeholder:"搜索图书",
				searchText: "",
				booklikeinfos:[
					{
						title:"图书名和图书内容介绍最多可以显示两行...",
						imageURL:"../../static/image/banner1@3x.png"
					},
					{
						title:"图书名和图书内容介绍最多可以显示两行...",
						imageURL:"../../static/image/banner1@3x.png"
					},
					{
						title:"图书名和图书内容介绍最多可以显示两行...",
						imageURL:"../../static/image/banner1@3x.png"
					}
				],
				banImages: [{
						text: "畅销榜",
						URL: "../../static/image/sc_ic_cxb@3x.png"
					},
					{
						text: "新书榜",
						URL: "../../static/image/sc_ic_xsb@3x.png"
					},
					{
						text: "特价区",
						URL: "../../static/image/sc_ic_tjq@3x.png"
					},
					{
						text: "秒杀区",
						URL: "../../static/image/sc_ic_msq@3x.png"
					}
				],
				boxInfo: [{
					imgurl: "../../static/image/sc_ic_clock@3x.png",
					title: "每日秒杀"
				}],
				boxInfo1: [{
					imgurl: "../../static/image/sc_ic_ebook@3x.png",
					title: "电子阅读新生活"
				}],
				boxInfo2: [{
					imgurl: "../../static/image/sc_ic_like@3x.png",
					title: "猜你喜欢的图书"
				}],
				bookseconInfo: [{
						imageURL: "../../static/image/banner1@3x.png",
						title: "追风筝的人",
						price: "12",
						oprice: "128"
					},
					{
						imageURL: "../../static/image/banner1@3x.png",
						title: "追风筝的人",
						price: "12",
						oprice: "128"
					},
					{
						imageURL: "../../static/image/banner1@3x.png",
						title: "追风筝的人追风筝的人追风筝的人追风筝的人追风筝的人追风筝的人追风筝的人",
						price: "12",
						oprice: "128"
					}
				],
				bandInfos: [{
						imageURL: "../../static/image/sc_pic_wyxs@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_thsj@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_jftd@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_rwsk@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_kxts@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_cglz@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_ysq@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_mssh@3x.png"
					},
					{
						imageURL: "../../static/image/sc_pic_wyts@3x.png"
					}
				],
				gridList: [ //格子数据列表
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_wyxs@3x.png',
						tips: 19,
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_thsj@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_jftd@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_rwsk@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_kxts@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_cglz@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_ysq@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_mssh@3x.png',
						tips: ''
					},
					{
						name: '测试图标',
						imgUrl: '../../static/image/sc_pic_wyts@3x.png',
						tips: ''
					}
				]
			}
		},
		onLoad() {
			this.ongetBandInfo()
		},
		methods: {
			getSearchText: function(res) {
				console.log(res)
			},
			onchange: function(e) {
				console.log(e)
			},
			onclickItem:function(res){
				console.log('uuuwuwuwuwu' + res)
			},
			ongetBandInfo:function(){
				this.netWork({
					url:api.GEEBOO_mobile_adv,
					success:(res) =>{
						
					},
					fail:(res) =>{
						
					}
				})
			}
		},
		components: {
			searchJs,
			boxs,
			uniCountdown,
			bookListJs,
			uniGrid,
			uniGridItem,
			bookLikeJs
		}
	}
</script>

<style lang="scss">
	/* banner */
	.swip {
		margin-top: 14rpx;
		height: 250rpx;
	}

	.swImg {
		width: 100%;
		height: 100%;
	}

	/* 畅销榜/新书榜/特价区/秒杀区 */
	.box1 {
		display: flex;
		flex-direction: row;
		height: 280rpx;
		/* background-color: #007AFF; */
	}

	.box-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 250rpx;
	}

	.box-img {
		margin-top: 50px;
		width: 96rpx;
		height: 96rpx;
	}

	.box-title {
		margin-top: 20rpx;
		color: #333333;
		font-size: 28rpx;
	}

	.second {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 书列表 */
	.box-list {
		width: 750rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.grid-items {
		width: 250rpx;
		height: 250rpx;
	}

	.grid-img {
		margin-left: 15rpx;
		width: 220rpx;
		height: 220rpx;
	}
	
	
	
</style>
