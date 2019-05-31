//入口页
<template>
    <div id="questionnaire" style="height:100%">
        <transition :name="transition">
            <router-view :key="$route.name"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: "questionnaire",
    data: function() {
        return {
            transition: ""
        };
    },
    //监听组件间路由状态，判断过渡动画
    watch: {
        $route(to, from) {
            let transitionIndex = to.meta.index - from.meta.index;
            if (transitionIndex > 0) {
                this.transition = "fade-in";
            } else if (transitionIndex < 0) {
                this.transition = "fade-out";
            } else {
                this.transition = "";
            }
            this.$forceUpdate();
        }
    }
};
</script>
<style scoped>
#questionnaire{
    background-color:rgba(230, 230, 230, 1);
}
</style>
