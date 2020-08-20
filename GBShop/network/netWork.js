import api from 'network/api.js'

module.exports = (params) =>{
	let url = api.BASE_URI + params.url;
	let method = params.method;
	let header = params.header || {};
	let data = params.data || {};
	if (method) {
		method = method.toUpperCase();
		if (method == "POST") {
			header = {"content-type":"application/x-www-form-urllencoded"}
		}
	}
	if (!params.hideLoading) {
		uni.showLoading({
			title:"加载中"
		})
	}
	uni.request({
		url:url,
		method:method || "GET",
		header:header,
		data:data,
		dataType:"json",
		success: (res) => {
			if (res.statusCode && res.statusCode != 200) {
				uni.showModal({
					content:res.errMsg
				})
				return;
			}
			typeof params.success == "function" && params.success(res.data);
		},
		fail: (err) => {
			uni.showModal({
				content:err.errMsg
			})
			typeof params.fail == "function" && params.fail(err.data);
		},
		complete: (e) => {
			console.log(e);
			uni.hideLoading()
			typeof params.complete == "function" && params.complete(e.data);
			return;
		}
	})
}
