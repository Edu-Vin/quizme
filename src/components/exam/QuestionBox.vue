<template>
	<div class="col-md-6 quiz-content align-items-center">
		<div class="loading loader-show" v-if='loader'>
			<svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
				<circle id="loading-inner" cx="75" cy="75" r="60"></circle>
			</svg>
		</div>
		<div class='question-header mt-5' v-if='currentQuestion != null'>
			<h4>Question {{ numAnswered + 1 }}/<span>{{ numTotal }}</span></h4>
		</div>
		<div class='category-wrapper mt-4' v-if='currentQuestion != null'>
			<p v-if = "section != ''" v-html='section'></p>
			<p v-html="currentQuestion.question"></p>
			<div class='answers mt-5'>
				<h5 v-for="(answer, index) in answers" 
			    	:key="index"
			    	@click="selectedAnswer(index)"
			    	:class="answerClass(index)"
			    	v-html='answer'
			    	>
			    </h5>
            	<b-button variant="primary" @click="getAnswer" :disabled="selectedIndex === null && !answered">Next</b-button>
			</div>	
		</div>
	</div>
</template>
<script>
import {selectedAnswer, getAnswer, answerClass} from '@/js/general.js'
import _ from 'lodash'
export default{
	name:'QuestionBox',
	props:{
		currentQuestion:Object,
		loader:Boolean,
		nextQuestion:Function,
		numAnswered:Number,
		numTotal:Number,
		correctAnswer:Function
		
	},
	data(){
		return{
			selectedIndex:null,
			correctIndex:null,
			answers:{},
			answered:false,
			section:""
		}
	},
	watch:{
		currentQuestion:{
			immediate: true,
			handler() {
				this.selectedIndex = null,
				this.answered = false
				if(this.currentQuestion != null){
					this.shuffleAnswers()
				}
				
			}
		}
	},
	methods:{
		selectedAnswer,
		getAnswer,
		answerClass,

		shuffleAnswers(){
			this.questions = this.currentQuestion;
			this.answers = this.currentQuestion.option
			this.correctIndex = this.currentQuestion.answer
			this.section = this.currentQuestion.section
		},

	},

}
</script>