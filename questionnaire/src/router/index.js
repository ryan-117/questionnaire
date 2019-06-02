import index from "../view/Index.vue"; // 首页
import welcome from "../view/Welcome.vue";  // 欢迎页
import complete from "../view/Complete.vue";  // 完成页
//index设置层级，关系到组件页面过渡动画，根据页面层级判断页面跳转、滑入还是撤回
//首页，个人中心、分类页，发现页等一级页面index为0，二级页面设为1，三级页面为2
export default [
    { path: '*', component: welcome },
    { path: process.env.ROOT_DIRNAME, name: "/", meta: { index: 0, requireLogin: false }, component: welcome },
    { path: "/index", name: "index", meta: { index: 0, requireLogin: false }, component: index },
    { path: "/complete", name: "complete", meta: { index: 0, requireLogin: false }, component: complete },
];