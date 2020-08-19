export default{
	HttpRequestGET:function(reqUrl,params,successCallBack,failCallBack){
		let paramsObj = {};
		for (var key in params) {
			if (!(params[key] === null || params[key] === '')) {
				paramsObj[key] = params[key];
			}
		}
		uni.request({
			url:api.BASE_URI + reqUrl,
			data:paramsObj,
			header:"",
			method:"GET",
			success: (res) => {
				console.log(res.data);
				successCallBack(res.data);
			},
			fail: (res) => {
				console.log(res);
			}
		})
	},
	
	HttpRequestPOST:function(reqUrl,params,successCallBack,failCallBack){
		let paramsObj = {};
		for (var key in params) {
			if (!(params[key] === null || params[key] === '')) {
				paramsObj[key] = params[key];
			}
		}
		uni.request({
			url:api.BASE_URI + reqUrl,
			data:paramsObj,
			header:"",
			method:"POST",
			success: (res) => {
				console.log(res);
				successCallBack(res.data);
			},
			fail: (res) => {
				console.log(res);
			}
		})
	}
}