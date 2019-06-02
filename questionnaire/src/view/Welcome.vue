<template>
	<div id="welcome">
		<div class="info">
			<img src="../common/img/icon.png" alt="" />
			<div class="questiopn-content">
				<p class="title">智能手机用户满意度调查</p>
				<p class="desc">
					为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！
				</p>
			</div>
			<router-link :to="{ name: 'index' }"
				><button>开始答题</button></router-link
			>
		</div>
	</div>
</template>
<style lang="less" scoped>
#welcome {
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
		.questiopn-content {
            margin: 0.1rem auto;
            max-width: 60%;
			.title {
				font-size: 0.2rem;
				color: #333;
				text-align: center;
                height: 0.3rem;
                line-height: 0.3rem;
                font-weight: 700;
                margin-bottom: 0.08rem;
			}
            .desc {
                font-size: 0.14rem;
                line-height: 0.2rem;
				color: #666;
				text-align: justify;
            }
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

