<template>
	<header id="top">
		<h2>问卷管理平台</h2>
		<!-- <router-link tag="h3" to="/">我的问卷</router-link> -->
	</header>
</template>
<style lang="scss">
$blue: #22559E;
#top {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 5rem;
	background-color: $blue;
	color: #fff;
	h2 {
		margin: 0 5rem 0 6rem;
		font-size: 1.8rem;
		&:before {
			display: inline-block;
			width: 2rem;
			height: 2rem;
			line-height: 2rem;
			margin-right: 0.5rem;
			content: "?";
			color: $blue;
			text-align: center;
			background-color: #fff;
			border-radius: 50%;
		}
	}
	h3 {
		font-size: 1.2rem;
		cursor: pointer;
	}
}
</style>
