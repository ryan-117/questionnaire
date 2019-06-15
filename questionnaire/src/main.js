import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.config.productionTip = false; //去除生产环境提示

import routes from '@/router' // 路由配置
// 调用toast插件
import toast from '@/components/toast/toast'
Vue.use(toast)
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
    ...App,
    created() {
        let wxInfo = {}
        this.$axios.get(`/questionnaire/wechat/getJsSdkInfo?url=${encodeURIComponent(location.href.split('#')[0])}`).then(res => {
            wxInfo = res.data;
            wxInfo.debug = true;
            wxInfo.jsApiList = ['onMenuShareTimeline', "onMenuShareAppMessage"];
            // wx.config({
            //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            //     appId: 'wx78752336f9890a8d', // 必填，公众号的唯一标识
            //     timestamp: 1560493078, // 必填，生成签名的时间戳
            //     nonceStr: 'shty', // 必填，生成签名的随机串
            //     signature: '69fb41cd6681bb6e123b38181a6f35d7c9ab742a',// 必填，签名
            //     jsApiList: ['onMenuShareTimeline'] // 必填，需要使用的JS接口列表
            // });
            wx.config(wxInfo)

            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: '问卷分享', // 分享标题
                    desc: "期待回复", // 分享描述
                    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=191168426,480905112&fm=26&gp=0.jpg', // 分享图标
                    success: function () {
                        // 设置成功
                    }
                });
                wx.onMenuShareAppMessage({
                    title: '问卷分享', // 分享标题
                    desc: "期待回复", // 分享描述
                    link: location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=191168426,480905112&fm=26&gp=0.jpg', // 分享图标
                    success: function () {
                        // 设置成功
                    }
                });
            });
        })
    }
})
