import home from "../view/Home.vue"; // 首页
// import sort from "../pages/Sort.vue";  // 分类
//index设置层级，关系到组件页面过渡动画，根据页面层级判断页面跳转、滑入还是撤回
//首页，个人中心、分类页，发现页等一级页面index为0，二级页面设为1，三级页面为2
export default [
    { path: '*', component: home },
    { path: process.env.ROOT_DIRNAME, name: "/", meta: { index: 0, requireLogin: false }, component: home },
    // { path: "/hfgo/sort", name: "sort", meta: { index: 0, requireLogin: false }, component: sort },
];