<template>
	<div id="home">
		<p class="title">{{ qsData.title }}</p>
        <div class="description">{{ qsData.description }}</div>
		<div
			class="question"
			v-for="(question, index) in questions"
			:key="index"
		>
			<!-- 单选题 -->
			<div v-if="question.type == 'radio'">
				<p class="question-title">
                    <span class="isMandatory" v-if="question.isMandatory">*</span>
					{{ index + 1 }}. {{ question.topic }}
				</p>
				<div class="check-content">
					<div
						class="check-item"
						v-for="(item, idx) in question.options"
						@click="selectSingleItem(question, idx, index)"
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
                    <span class="isMandatory" v-if="question.isMandatory">*</span>
					{{ index + 1 }}. {{ question.topic }}
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
						<p>{{ item.title }}</p>
					</div>
				</div>
			</div>
			<!-- 评分题 -->
			<div v-if="question.type == 'rate'">
				<p class="question-title">
                    <span class="isMandatory" v-if="question.isMandatory">*</span>
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
                    <span class="isMandatory" v-if="question.isMandatory">*</span>
					{{ index + 1 }}. {{ question.topic }}
				</p>
				<div class="check-content">
					<textarea
						@focus="focusTextarea(question, index)"
						v-model="question.answer"
						placeholder="写点什么吧"
					></textarea>
				</div>
			</div>
		</div>
		<div v-show="httpComplete" class="submit">
			<button @click="submitQuestionnaire">提交</button>
		</div>
        <modal :msg="msg" :isShowModal="isShowModal"></modal>
	</div>
</template>
<script>
import modal from "../components/modal";
export default {
    components: {
        modal
    },
	data() {
		return {
			qsData: {},
			questions: [],
            httpComplete: false,
            msg: "",
            isShowModal: false
		}
	},
	methods: {
		selectMultiItem(item) { // 多选
			item.checked = !item.checked;
			this.$forceUpdate();
		},
		selectSingleItem(question, idx, index) { // 单选
			question.checkedIndex = idx
			this.$forceUpdate();
		},
		selectScoreItem(question, idx) { // 评分
			question.chooseNum = idx
		},
		focusTextarea(question, index) {
			this.questions[index].answer = question.answer
		},
		submitQuestionnaire() {
			let id = this.$route.query.id;
			let ansQs = this.questions.map(item => {
				let answer = {};
				answer.questionId = item.id;
				answer.isMandatory = item.isMandatory;
				answer.type = item.type;
				if (item.type == "radio") {
                    if (item.checkedIndex != -1) {
                        answer.answer = item.options[item.checkedIndex].id.toString();
                    } else {
                        answer.answer = "-1"
                    }
				} else if (item.type == "checkbox") {
					let checkboxAns = [];
					item.options.map((opt, idx) => {
						if (opt.checked) {
							checkboxAns.push(opt.id)
						} else {
							return
						}
					})
					answer.answer = checkboxAns.join();
				} else if (item.type == "textarea") {
					answer.answer = item.answer;
				}
				return answer
			})
			// console.log(JSON.stringify(ansQs, null, 4))
			let errorOrNot = ansQs.some((ans, index) => {
                if (ans.isMandatory == 1 && (!ans.answer || ans.answer == -1)) {
                    this.$toast(`第${index + 1}题尚未作答`);
                    return true;
                }
			})
			console.log(errorOrNot)
			if (errorOrNot) {
				return;
			}
			let ans = {
				questionnaireId: id,
				qsAnswers: ansQs
			}
			this.$axios({
				method: 'post',
				url: `/questionnaire/questionnaire/saveQsnaireAnswer`,
				data: ans
			}).then(res => {
				if (res.data.code == "0") {
					this.$router.push({ name: "complete" })
				} else {
					this.$toast(res.data.msg)
				}
			})
		},
		getQsData() {
			let id = this.$route.query.id;
			this.$axios({
				method: 'get',
				url: `/questionnaire/questionnaire/loadQsnaire/${id}`
			}).then(res => {
                if (res.data.code == "0") {
                    this.qsData = res.data.data;
                    this.httpComplete = true;
                    this.qsData = res.data.data;
                    this.questions = res.data.data.questions.map(item => {
                        if (item.type == "radio") {
                            item.checkedIndex = -1
                        } else if (item.type == "checkbox") {
                            item.options.checked = false
                        }
                        return item
                    })
                }else if(res.data.code == "521") {
                    this.msg = "该问卷未发布或已过期";
                    this.isShowModal = true
                } else {
                    this.$toast(res.data.msg)
                }
			})
		}
	},
	created() {
		this.getQsData();
	}
}
</script>

<style lang="less" scoped>
@gray: rgba(230, 230, 230, 1);
@white: #fff;
@blue: #1ea0fa;
#home {
	width: 3.75rem;
	background-color: @white;
	.title {
		width: 3.55rem;
		padding: 0.1rem 0.1rem;
		line-height: 0.4rem;
		font-size: 0.24rem;
		font-weight: 700;
		color: @blue;
		text-align: center;
		word-wrap: break-word;
	}
	.description {
		width: 3.55rem;
		padding: 0.1rem 0.1rem;
		line-height: 0.22rem;
		font-size: 0.16rem;
		color: #666;
		text-align: center;
		word-wrap: break-word;
	}
	.question {
		width: 3.6rem;
		margin: 0.08rem auto 0.25rem;
		background-color: @white;
		border-radius: 0.05rem;
		.question-title {
			line-height: 0.3rem;
			font-size: 0.18rem;
			font-weight: 700;
			color: #333;
			width: 3.4rem;
			margin: 0 auto 0.1rem;
            span {
                color: red;
            }
		}
		.check-content {
			width: 3.4rem;
			margin: 0 auto;
			color: #666;
			border: 1px solid @gray;
			border-radius: 0.04rem;
			.check-item {
				font-size: 0.16rem;
				display: flex;
				align-items: center;
				height: 0.4rem;
				border-bottom: 1px solid @gray;
				&:last-child {
					border-bottom: none;
				}
				.single-check {
					display: block;
					box-sizing: border-box;
					width: 0.14rem;
					height: 0.14rem;
					border-radius: 0.07rem;
					margin: 0 0.08rem;
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
					margin: 0 0.08rem;
					border: 1px solid @gray;
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
				padding: 0.05rem 0.08rem;
				outline: none;
				border: none;
			}
		}
	}
	.submit {
		width: 3.75rem;
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
            margin: 0.3rem auto 0.8rem;
		}
	}
}
</style>
