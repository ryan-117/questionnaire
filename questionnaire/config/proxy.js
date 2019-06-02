module.exports = {
    proxy: {
        "/questionnaire": {
            //示例：调用/questionnaire/login 请求登录接口 http://10.0.0.222:8800/questionnaire/login
            target: "http://10.0.0.222:8800/questionnaire", // 接口域名
            // target: "http://27.115.67.203:18163/questionnaire/", // 接口域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, //是否跨域
            pathRewrite: {
                "^/questionnaire": "" //需要rewrite的,
            }
        }
    }
};
