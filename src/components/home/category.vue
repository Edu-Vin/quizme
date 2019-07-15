<template>
	<div class="col-md-6 quiz-content d-flex align-items-center">
        <div class="register-category w-100">
            <h3 class="title text-center">Welcome to Quizme!</h3>
            <p class='text-center'>Choose a category to get started</p>
            <div class='category-wrapper mt-5'>
                <h5 
                v-for="(category, index) in categories" 
                :key='index' 
                @click="logAnswer(index)" 
                :class="addSelected(index)">{{ category }}
                </h5>
                <b-button variant="primary" @click='selectAnswer'>Get Started</b-button>
            </div>

        </div>
	 </div>
</template>
<script>
	export default {
		name:'category',
		props:{
			categories:Array,
			addSelected:Function,
			logAnswer:Function,
			selectedCategory:String
		},
		methods:{
			selectAnswer(){
				if(this.selectedCategory == 'General Quiz'){
					this.$router.push('quiz/general')
					// window.location.href = process.env.VUE_APP_BASE_URL + '/quiz/general'
				}
				if(this.selectedCategory == 'UTME'){
					this.$router.push('quiz/exam/utme')
				}
				if(this.selectedCategory == 'WASSCE'){
					this.$router.push('quiz/exam/wassce')
				}
			}
		}
	}
</script>