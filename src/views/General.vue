<template>
	<div class="row vertical-center main-row">
	  	<PicColumn :subjectPic='subjectPic'/>
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
	import PicColumn from '@/components/general_quiz/PicColumn.vue'
	import QuestionBox from '@/components/general_quiz/QuestionBox.vue'
	import ShowAnswers from '@/components/general_quiz/ShowAnswers.vue'
	import {logAnswer, addSelected, next, getQuestions, nextQuestion, correctAnswer, restartQuiz} from '@/js/general.js'
	import _ from 'lodash'

	export default{
		name: 'general',
		components:{
			Preferences,
			PicColumn,
			QuestionBox,
			ShowAnswers
		},
		data(){
			return{
				options:{'Subject':['Science & Nature','Animals', 'Computers', 'Mathematics', 'Entertainment'],'Amount':[10,20,30], 'Difficulty':['Easy', 'Medium', 'Hard']},
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
        		subjectPic:'home.jpeg',
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
	        	if(this.Answers['Difficulty'] == 'Easy' && this.Answers['Subject'] == 'Animals' || this.Answers['Subject'] == 'Mathematics')
	        	{
	        		var url = "https://opentdb.com/api.php?amount="+this.Answers['Amount']+"&category="+this.getCategory(this.Answers['Subject'])+"&difficulty=medium&type=multiple";
	        	}
	        	else{
	        		var url = "https://opentdb.com/api.php?amount="+this.Answers['Amount']+"&category="+this.getCategory(this.Answers['Subject'])+"&difficulty="+this.Answers['Difficulty'].toLowerCase()+"&type=multiple";
	        	}
	        	this.subjectPic = this.changePic(this.Answers['Subject']);
	        	this.getQuestions(url);
	        	
	        },

	        getCategory(subject){
	        	switch(subject){
	        		case 'Science & Nature':
	        			return 17
	        			break
	        		case 'Animals':
	        			return 27
	        			break
	        		case 'Computers':
	        			return 18
	        			break
	        		case 'Mathematics':
	        			return 19
	        			break
	        		case 'Entertainment':
	        			return 11
	        			break
	        		default:
	        			return 12
	        	}
	        },

		    changePic(subject){
		    	switch(subject){
	        		case 'Science & Nature':
	        			return 'science.png'
	        			break
	        		case 'Animals':
	        			return 'animal2.png'
	        			break
	        		case 'Computers':
	        			return 'computer.jpg'
	        			break
	        		case 'Mathematics':
	        			return 'math.jpg'
	        			break
	        		case 'Entertainment':
	        			return 'entertainment.jpg'
	        			break
	        		default:
	        			return 'home.png'
	        	}
		    }
		}

	}
</script>