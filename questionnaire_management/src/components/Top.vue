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
	height: 60px;
	background-color: $blue;
	color: #fff;
	h2 {
		margin: 0 60px 0 72px;
		font-size: 21px;
        height: 30px;
        line-height: 30px;
		span {
			display: inline-block;
			width: 24px;
			height: 24px;
			line-height: 24px;
			margin-right: 6px;
            background: url("../images/icon.png") no-repeat;
            background-size: contain;
            vertical-align: middle;
		}
	}
	h3 {
		font-size: 21px;
		cursor: pointer;
	}
}
</style>
