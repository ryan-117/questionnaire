import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.config.productionTip = false; //去除生产环境提示

import routes from '@/router' // 路由配置
//主组件
import App from '@/App'
// 引入公共js
require('@/common/js/flexible.js');
// 引入公共css
require("@/common/css/flexible.css");
require("@/common/css/animate.min.css"); //动画

// 实例化 router
const router = new VueRouter({
    mode: process.env.ROUTER_MODE,
    base: __dirname,
    routes: routes,
});
let vm = new Vue({
    el: '#questionnaire',
    router,
    ...App
})
