<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-container>
			    <b-navbar-brand to="/">Quizme</b-navbar-brand>
			     <b-navbar-toggle target="nav-collapse" v-if='!isHome'></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav v-if='!isHome'>
			      <b-navbar-nav>
			        <b-nav-item to="/quiz/general">General Quiz</b-nav-item>
			        <b-nav-item to="/quiz/exam/utme">UTME</b-nav-item>
			         <b-nav-item to="/quiz/exam/wassce">WASSCE</b-nav-item>
			      </b-navbar-nav>
			  </b-collapse>
		    </b-container>
		</b-navbar>

	</div>
</template>
<script>
export default {
  props: ['isHome']
}
</script>
