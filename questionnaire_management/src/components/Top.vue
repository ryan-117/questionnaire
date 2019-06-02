<template>
	<header id="top">
		<h2><span></span>问卷管理平台</h2>
		<!-- <router-link tag="h3" to="/">我的问卷</router-link> -->
        <!-- <div class="userinfo">523</div> -->
	</header>
</template>
<style lang="scss">
$blue: #22559E;
#top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5rem;
	background-color: $blue;
	color: #fff;
	h2 {
		margin: 0 5rem 0 6rem;
		font-size: 1.8rem;
        height: 2.5rem;
        line-height: 2.5rem;
		span {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			line-height: 2rem;
			margin-right: 0.5rem;
            background: url("../images/icon.png") no-repeat;
            background-size: contain;
            vertical-align: middle;
		}
	}
	h3 {
		font-size: 1.2rem;
		cursor: pointer;
	}
}
</style>
