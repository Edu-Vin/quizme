<template>

	<div class="col-md-6 quiz-content align-items-center">
		<p class='score-title mt-4'>Quizme</p>
		<div class='score mt-5' v-if="show_answer == false">
			<h1 class="mb-4">Score</h1>
			<radial-progress-bar :diameter="200"
	                       :completed-steps="completedSteps"
	                       :total-steps="totalSteps"
	                       :innerStrokeColor="bgcolor">
		   <h1>{{ completedSteps }}</h1>
		  </radial-progress-bar>
		  <b-button variant="primary" class='mt-4' @click='showAnswer'>Show Answers</b-button>
		</div>

		<div class='show-answer mt-4' v-if="show_answer == true">
			<div
			v-for='(current, index) in questions'
			:key='index'
			>
				<h5 v-if="current.section != ''" v-html="current.section"></h5>
				<h5
				v-html='index+1 +") "+ current.question'>
				</h5>
				<p v-if="current.correct_answer" class='pl-3'
				v-html="'Answer - ' + current.correct_answer">
				</p>
				<p v-if="current.answer" v-html="'Answer - ' + current.option[current.answer]"></p>
			</div>
			<b-button variant="primary" class='mt-4 mb-4' @click='restartQuiz'>Restart Quiz</b-button>
		</div>
	</div>

</template>
<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
	name: 'ShowAnswers',
	  components: {
			    RadialProgressBar
	},
	props: {
	    questions: Array,
	    completedSteps: Number,
	    restartQuiz: Function
	},
	data () {
	    return {
	      totalSteps: this.questions.length,
	      bgcolor: '#8992BA',
	      show_answer: false
	    }
	},
	methods: {
	  	showAnswer () {
	  		this.show_answer = true
	  	}
	}
}

</script>
