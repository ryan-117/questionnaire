<template>
	<div class="container">
		<div class="qu-wrap">
			<header>
				<router-link tag="span" to="/">&lt; 返回</router-link>
				<p>{{ quData.title }}</p>
			</header>
			<div class="qu-content">
				<div class="qu-item" v-for="(item, index) in quData.questions">
					<section class="qu-data">
						<h3>
							{{ `Q${index + 1}&nbsp;&nbsp;&nbsp;${item.topic}` }}
						</h3>
						<template v-if="item.type !== 'textarea'">
							<p v-for="option in item.options">{{ option }}</p>
						</template>
						<p v-else>有效回答</p>
					</section>
					<section class="ans-data">
						<h4>数据占比</h4>
						<template v-if="item.type === 'radio'">
							<p
								class="outerBar"
								v-for="(option, optIndex) in item.options"
							>
								<span
									class="innerBar"
									:style="{ width: randomScale() }"
								></span>
								<span class="scaleNum"></span>
							</p>
						</template>
						<p
							class="outerBar"
							v-else-if="item.type === 'textarea'"
						>
							<span
								class="innerBar"
								:style="{ width: randomScale() }"
							></span>
							<span class="scaleNum"></span>
						</p>
						<p class="echart" v-else></p>
					</section>
				</div>
			</div>
			<div class="data-back">
				<router-link tag="p" to="/" id="backBtn"
					><span>返 回</span></router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import Store from '../store.js';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/toolbox'

export default {
	name: 'Data',
	data() {
		return {
			quData: {},
			scale: '',
		}
	},

	beforeRouterEnter(to, from, next) {
		let id = to.params.id;
		let item = {};
		if (id !== 0) {
			let length = Store.fetch().length;
			if (id < 0 || id > length) {
				alert('非法路由');
				next('');
			}
			else {
				item = Store.fetch()[id - 1];
			}

			if (item.state === 0) {
				next();
			}
			else {
				alert('非法路由');
				next('/');
			}
		}
		else {
			next();
		}
	},

	created() {
		this.getData();
	},

	methods: {
		getData() {
			let id = this.$route.params.id;
			this.quData = Store.fetch()[id - 1];
		},

		randomScale() {
			return Math.random().toFixed(2) * 100 + '%';
		},

		renderEchart(element) {
			let myChart = echarts.init(element);
			let option = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				series: [
					{
						name: '选择人数',
						type: 'pie',
						radius: '60%',
						center: ['30%', '50%'],
						data: [
							{ value: 20, name: '选项1' },
							{ value: 30, name: '选项2' },
							{ value: 40, name: '选项3' },
							{ value: 50, name: '选项4' }
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			};
			myChart.setOption(option);
		}
	},

	mounted() {
		let charts = document.querySelectorAll('.echart');

		[].forEach.call(charts, (item) => {
			this.renderEchart(item);
		});
	}
}

</script>

<style scoped lang="scss">
@import "../style/public.scss";
.qu-wrap > header {
	p:hover {
		background-color: #fff;
	}
}
.data-back {
	margin-top: 12px;
	width: 48px;
	padding: 12px 36px;
	@include add-btn;
}
.qu-content {
	.qu-item {
		display: flex;
		border: 1px solid #e2e2e2;
		&:hover {
			background-color: #fff;
		}
		.qu-data,
		.ans-data {
			display: flex;
			flex-direction: column;
			& > * {
				height: 24px;
			}
			.echart {
				height: 240px;
			}
		}
		.qu-data {
			flex: 3;
			p {
				margin: 12px 0 0 36px;
			}
		}
		.ans-data {
			flex: 2;
			.outerBar {
				position: relative;
				width: 240px;
				height: 14px;
				margin: 19px 0 0 0;
				font-size: 14px;
				border: 1px solid #ccc;
			}
			.innerBar {
				display: block;
				width: 60%;
				height: 100%;
				background-color: $blue;
			}
			.scaleNum {
				position: absolute;
				top: 0;
				right: -48px;
			}
		}
	}
}
</style>
