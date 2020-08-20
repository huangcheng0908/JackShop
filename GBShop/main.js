import Vue from 'vue'
import App from './App'
import api from 'network/api.js'
import netWork from 'network/netWork.js'

Vue.config.productionTip = false

Vue.prototype.api = api
Vue.prototype.netWork = netWork
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
