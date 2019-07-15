<template>
	<div class="col-md-6 info-body">
		    <h2>Quizme</h2>
		    <img :src="require(`@/assets/img/${subjectPic}`)" alt="Subject image">
	    </div>
</template>
<script>
export default{
	name:'',
	props:{
		subjectPic:String
	}
}
</script>