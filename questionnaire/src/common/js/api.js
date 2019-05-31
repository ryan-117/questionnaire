export default {
    flag: true,
    delayTime: 800,
    getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    setCookie(name, value, time) {
        let Days = time || 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    delCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    //上滑加载，fn参数：滑动后加载数据所执行的方法
    loadmore(fn) {
        var _this = this;
        let innerHeight = document.querySelector('body').clientHeight;
        let outerHeight = document.documentElement.clientHeight;
        let afterScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // if(this.beforeScrollTop < afterScrollTop){
        // console.log(innerHeight, outerHeight, afterScrollTop)
        if (innerHeight <= (outerHeight + afterScrollTop)) {

            if (_this.flag) {
                fn();
                _this.flag = false;
                //防抖  
                setTimeout(() => {
                    _this.flag = true
                }, _this.delayTime)
            }
        }
        // }
        this.beforeScrollTop = afterScrollTop
    }
}