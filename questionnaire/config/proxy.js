module.exports = {
    proxy: {
        "/questionnaire": {
            target: "http://10.0.0.58:9999/questionnaire", // 接口域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, //是否跨域
            pathRewrite: {
                "^/questionnaire": "" //需要rewrite的,
            }
        }
    }
};
