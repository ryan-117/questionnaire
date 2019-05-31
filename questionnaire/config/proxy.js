module.exports = {
    proxy: {
        "/hfgoapi": {
            //示例：调用/hfgoapi/login 请求登录接口 http://10.0.0.222:8800/hfgoapi/login
            target: "http://10.0.0.222:8800/hfgoapi", // 接口域名
            // target: "http://27.115.67.203:18163/hfgoapi/", // 接口域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, //是否跨域
            pathRewrite: {
                "^/hfgoapi": "" //需要rewrite的,
            }
        }
    }
};
