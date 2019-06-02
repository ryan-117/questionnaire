<template>
	<div id="complete">
		<div class="info">
			<img src="../common/img/icon.png" alt="" />
			<p>恭喜你，答题已完成</p>
            <router-link :to="{name:'index'}"><button >重新答题</button></router-link>
		</div>
	</div>
</template>
<style lang="less" scoped>
#complete {
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	.info {
		img {
			width: 0.9rem;
            display: block;
            margin: 0 auto;
		}
		p {
			font-size: 0.2rem;
			color: #666;
			text-align: center;
			margin-top: 0.1rem;
			font-weight: 700;
		}
        button {
            display: block;
            margin: 0.3rem auto;
            width: 1rem;
            height: 0.4rem;
            border: 1px solid rgba(40, 99, 243, 1);
            border-radius: 0.2rem;
            background-color: #fff;
            color: rgba(40, 99, 243, 1);
            font-size: 0.16rem;
        }
	}
}
</style>

