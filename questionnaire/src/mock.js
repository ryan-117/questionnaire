//mock数据
//mock数据语法文档https://github.com/nuysoft/Mock/wiki/Syntax-Specification#%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF%E5%AE%9A%E4%B9%89%E8%A7%84%E8%8C%83-dtd
var Mock = require("mockjs");
var template = {
    "packs|1-5": [{
        activityType: "group",
        "tag1|1-3": "打字",
        "tag1|1-3": "合到",
        iconSquare: "http://27.115.67.203:18163/xuetang_resource/upload/2018/12/18/1545114465951.jpg",
        "superscriptFlag|1": true,
        "superscripttitle|1": "分开"
    }],
    "list|3-5": [{
            "catagoryOrder|1-10": 1,
            "id|1-5": 1,
            "name|1-4": "有人",
            parentId: "-1"
        },
        {
            "catagoryOrder|1-100": 1,
            id: "f78f4111d802459f910940ebb6577160",
            "name|1-3": "背景",
            "parentId|1-5": 1
        },
        {
            "catagoryOrder|1-100": 1,
            id: "f78f4111d802459f910940ebb6577160",
            "name|1-4": "给他",
            "parentId|1-5": 1
        }
    ]
};
var data = Mock.mock(template);
console.log(JSON.stringify(data.packs, null, 4));
export default data;
//调用方法
//import mockData from "../../mock.js";
//console.log(mockData);
