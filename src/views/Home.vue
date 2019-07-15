<template>
	<div class="row vertical-center main-row">
	  	<div class="col-md-6 info-body">
		    <h2>Quizme</h2>
		    <img src="@/assets/img/home.jpeg" alt="Responsive image">
	    </div>
	    <category :categories='categories' :addSelected='addSelected' :logAnswer='logAnswer' :selectedCategory='selectedCategory'/>
     </div>
</template>

<script>
import category from '@/components/home/category.vue' 
export default {
  name: 'home', 
  components:{
		category
	},
   data(){
      return{        
      	categories:['General Quiz', 'UTME','WASSCE'],
        selectedIndex:null,
        selectedCategory:null
      }
    },
    methods:{
        logAnswer(index){
            this.selectedIndex = index
            this.selectedCategory = this.categories[index]
        },
        addSelected(index){
            if(this.selectedIndex == index){
                return 'selected';
            }
        },  
        
    }
}
</script>
