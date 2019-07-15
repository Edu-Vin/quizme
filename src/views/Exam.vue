<template>
	<div class="row vertical-center main-row">
	  	<div class="col-md-6 info-body">
		    <h2>Quizme</h2>
		    <img src="@/assets/img/exam.jpg" alt="Responsive image">
	    </div>
	    <Preferences 
	  		v-if='lastOption != null'
	  		:preferences='options[index]' 
	  		:logAnswer='logAnswer' 
	  		:addSelected='addSelected' 
	  		:next='next' 
	  		:section = 'index'
	  		:lastOption = 'lastOption'
	  		:startQuiz = 'startQuiz'
	  		:selectedIndex = 'selectedIndex'
	  	/>
	  	<QuestionBox v-if='lastOption == null && show_answer==false' 
	  		:currentQuestion='questions[questionIndex]' 
	  		:loader='loader' 
	  		:nextQuestion='nextQuestion'
	  		:numAnswered = 'questionIndex' 
	  		:numTotal = 'questions.length'
	  		:correctAnswer = 'correctAnswer'
	  	/>
	  	<ShowAnswers v-if='show_answer' :questions='questions' :completedSteps='correctAnswers' :restartQuiz='restartQuiz'/>
    </div>
</template>
<script>
import Preferences from '@/components/general_quiz/Preferences.vue'
import QuestionBox from '@/components/exam/QuestionBox.vue'
import ShowAnswers from '@/components/general_quiz/ShowAnswers.vue'
import {logAnswer, addSelected, next, getQuestions, nextQuestion, correctAnswer, restartQuiz} from '@/js/general.js'

import _ from 'lodash'

export default{
	name:'exam',
	components:{
		Preferences,
		QuestionBox,
		ShowAnswers
	},
	data(){
		return{
			options:{'Subject':['English','Mathematics', 'Physics', 'Government', 'English Literature'],'Amount':[5,10,20,30,]},
			index:'Subject',
			Answers:{},
			lastOption:false,
			selectedIndex:null,
    		selectedCategory:null,
    		questionIndex:0,
    		questions:[],
    		loader:false,
    		correctAnswers:0,
    		show_answer:false,
    		subjectPic:'home.jpeg'
		}
	},
	watch:{
		index:{
			immediate:true,
			handler(){
				this.selectedIndex = null,
				this.selectedCategory = null
			}
		}
	},
	methods:{
		logAnswer,
		addSelected,
		next,
		getQuestions,
		nextQuestion,
		correctAnswer,
		restartQuiz,

	     startQuiz(){
        	this.Answers[this.index] = this.selectedCategory
        	this.lastOption = null;
        	var type;
        	if(this.$route.params.type == 'utme'){
        		type = 'utme';
        	}
        	if(this.$route.params.type == 'wassce'){
        		type = 'wassce';
        	}

        	if(this.Answers['Subject'] == 'English Literature'){
        		this.Answers['Subject'] = 'englishlit';
        	}
        	var url = "https://questions.aloc.ng/api/q/"+this.Answers['Amount']+"?subject="+this.Answers['Subject'].toLowerCase()+"&type="+type;
        	this.getQuestions(url);
	        	
	     },   
	}
}
</script>