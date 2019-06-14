<template>
	<div id="home">
		<div class="title">{{ qsData.title }}</div>
		<div
			class="question"
			v-for="(question, index) in qsData.questions"
			:key="index"
		>
			<!-- 单选题 -->
			<div v-if="question.type == 'radio'">
				<p class="question-title">
					{{ index + 1 }}. {{ question.topic }}
				</p>
				<div class="check-content">
					<div
						class="check-item"
						v-for="(item, idx) in question.options"
						@click="selectSingleItem(question, idx)"
						:key="idx"
					>
						<span
							class="single-check"
							:class="{ checked: idx === question.checkedIndex }"
						></span>
						<p>{{ item.title }}</p>
					</div>
				</div>
			</div>
			<!-- 多选题 -->
			<div v-if="question.type == 'checkbox'">
				<p class="question-title">
					{{ index + 1 }}. {{ question.topic }}（多选题）
				</p>
				<div class="check-content">
					<div
						class="check-item"
						v-for="(item, idx) in question.options"
						@click="selectMultiItem(item)"
						:key="idx"
					>
						<span
							class="multi-check"
							:class="{ checked: item.checked }"
						></span>
						<p>{{ item.content }}{{ idx + 1 }}</p>
					</div>
				</div>
			</div>
			<!-- 评分题 -->
			<div v-if="question.type == 'rate'">
				<p class="question-title">
					{{ index + 1 }}. {{ question.title }}
				</p>
				<div class="check-content">
					<div class="score-con">
						<div
							class="score-item"
							v-for="(item, idx) in question.checkContent"
							:key="idx"
							@click="selectScoreItem(question, idx)"
							:class="{ checked: idx == question.checkedIndex }"
						>
							{{ item }}
						</div>
					</div>
				</div>
			</div>
			<!-- 简答题 -->
			<div v-if="question.type == 'textarea'">
				<p class="question-title">
					{{ index + 1 }}. {{ question.topic }}
				</p>
				<div class="check-content">
					<textarea placeholder="写点什么吧"></textarea>
				</div>
			</div>
		</div>
		<div class="submit">
			<button @click="submitQuestionnaire">提交</button>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			qsData: {},
			questions: []
		}
	},
	methods: {
		selectMultiItem(item) { // 多选
			item.checked = !item.checked
		},
		selectSingleItem(question, idx) { // 单选
			console.log(question.checkedIndex)
			console.log(idx)
			question.checkedIndex = idx
			console.log(question.checkedIndex)
			console.log("---")
		},
		selectScoreItem(question, idx) { // 评分
			question.chooseNum = idx
		},
		submitQuestionnaire() {
			this.$router.push({ name: "complete" })
		},
		getQsData() {
			let id = this.$route.query.id;
			this.$axios({
				method: 'get',
				url: `/questionnaire/questionnaire/${id}`,
				headers: {
					"Authorization": "Bearer 770ac260-ed16-4f58-9af4-3d6b268a97e1"
				}
			}).then(({ data }) => {
				this.qsData = data.data;
				this.questions = data.data.questions.map(item => {
					if (item.type == "radio") {
						item.checkedIndex = -1
					} else if (item.type == "checkbox") {
						item.options.checked = false
					}
					return item
				})
			})
		}
	},
	created() {
		// this.getQsData()
		let data = {
			"code": 0,
			"msg": "success",
			"data": {
				"id": 29,
				"title": "0614",
				"description": null,
				"time": "2019-6-14",
				"state": 1,
				"questions": [
					{
						"topic": "234234",
						"sort": 1,
						"type": "radio",
						"isMandatory": null,
						"answer": null,
						"options": [
							{
								"id": null,
								"title": "选2",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "选1",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "温热翁12343e32",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "选4",
								"chooseNum": null
							}
						]
					},
					{
						"topic": "duoxuan1",
						"sort": 2,
						"type": "checkbox",
						"isMandatory": null,
						"answer": null,
						"options": [
							{
								"id": null,
								"title": "选4",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "选1",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "选2",
								"chooseNum": null
							},
							{
								"id": null,
								"title": "选3",
								"chooseNum": null
							}
						]
					},
					{
						"topic": "文本题jianda ",
						"sort": 3,
						"type": "textarea",
						"isMandatory": 0,
						"answer": null,
						"options": null
					}
				]
			}
		}
		this.qsData = data.data;
		this.questions = data.data.questions.map(item => {
			if (item.type == "radio") {
				item.checkedIndex = -1
			} else if (item.type == "checkbox") {
				item.options.checked = false
			}
			return item
		})
        console.log(JSON.stringify(this.questions,null,4))
	}
}
</script>

<style lang="less" scoped>
@gray: rgba(230, 230, 230, 1);
@white: #fff;
@blue: rgba(40, 99, 243, 1);
#home {
	width: 3.75rem;
	background-color: @gray;
	min-height: 100vh;
	.title {
		width: 3.75rem;
		height: 0.4rem;
		line-height: 0.4rem;
		font-size: 0.18rem;
		font-weight: 700;
		color: #333;
		text-align: center;
		background-color: @white;
	}
	.question {
		width: 3.6rem;
		margin: 0.08rem auto;
		background-color: @white;
		border-radius: 0.05rem;
		.question-title {
			line-height: 0.3rem;
			font-size: 0.14rem;
			color: #333;
			width: 3.4rem;
			margin: 0 auto;
			border-bottom: 1px solid @gray;
		}
		.check-content {
			width: 3.4rem;
			margin: 0 auto;
			color: #666;
			.check-item {
				display: flex;
				align-items: center;
				height: 0.3rem;
				.single-check {
					display: block;
					box-sizing: border-box;
					width: 0.14rem;
					height: 0.14rem;
					border-radius: 0.07rem;
					margin-right: 0.05rem;
					border: 0.01rem solid @gray;
					&.checked {
						border: 0.04rem solid @blue;
					}
				}
				.multi-check {
					display: block;
					box-sizing: border-box;
					width: 0.14rem;
					height: 0.14rem;
					border-radius: 0.02rem;
					margin-right: 0.05rem;
					border: 0.01rem solid @gray;
					&.checked {
						border: none;
						background: url("../common/img/check.png") no-repeat;
						background-size: contain;
					}
				}
			}
			.score-con {
				width: 3.4rem;
				height: 0.7rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.score-item {
					background-color: @gray;
					font-size: 0.18rem;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #333;
					width: 0.6rem;
					height: 0.4rem;
					border-radius: 0.04rem;
					&.checked {
						color: @white;
						background-color: @blue;
					}
				}
			}
			textarea {
				width: 3.4rem;
				height: 0.8rem;
				box-sizing: border-box;
				resize: none;
				font-size: 0.14rem;
				color: #666;
				border-radius: 0.05rem;
				margin-bottom: 0.1rem;
				margin-top: 0.1rem;
				padding: 0.05rem 0.08rem;
			}
		}
	}
	.submit {
		width: 3.75rem;
		height: 0.6rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			width: 2.32rem;
			height: 0.36rem;
			border: none;
			border-radius: 0.18rem;
			background-color: @blue;
			font-size: 0.16rem;
			font-weight: 700;
			color: #fff;
		}
	}
}
</style>
