import index from "../view/Index.vue"; // 首页
import welcome from "../view/Welcome.vue";  // 欢迎页
import complete from "../view/Complete.vue";  // 完成页
export default [
    { path: '*', component: welcome },
    // { path: process.env.ROOT_DIRNAME, name: "/", component: welcome },
    { path: process.env.ROOT_DIRNAME, name: "/", component: index },
    { path: process.env.ROOT_DIRNAME + "complete", name: "complete", component: complete },
];