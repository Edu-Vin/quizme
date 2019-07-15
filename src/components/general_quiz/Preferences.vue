<template>
	<div class="col-md-6 quiz-content d-flex align-items-center">
        <div class="register-category w-100">
            <h3 class="title text-center">Almost there!</h3>
            <p class='text-center'>Choose your prefrences</p>
            <p class='text-center' v-if="section == 'Subject'"> Quiz {{section}} </p>
            <p class='text-center' v-if="section == 'Amount'"> {{section}} of questions </p>
            <p class='text-center' v-if="section == 'Difficulty'"> {{section}} Level </p>
            <div class='category-wrapper mt-5'>
                <h5 v-for="(preference, index) in preferences" 
                :key='index'
                @click="logAnswer(index)" 
                :class="addSelected(index)"
                >
                	{{preference}}
                </h5>
                <b-button 
                variant="primary" 
                @click='next' 
                v-if='lastOption == false' 
                :disabled="selectedIndex === null"
                >Next
            	</b-button>
                <b-button variant="primary" @click='startQuiz' v-if='lastOption == true'
                :disabled="selectedIndex === null">Get Started</b-button>
            </div>

        </div>
	 </div>
</template>
<script type="text/javascript">
	
	export default{
		name:'preferences',
		props:{
			preferences:Array,
			logAnswer:Function,
			addSelected:Function,
			next:Function,
			section:String,
			lastOption:Boolean,
			startQuiz:Function,
			selectedIndex:Number
		}

	}
</script>