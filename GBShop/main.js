import Vue from 'vue'
import App from './App'
import api from 'network/api.js'
import netWork from 'network/netWork.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
