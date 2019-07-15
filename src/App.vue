<template>
  <div id="app">
    <Header :isHome='isHome'/>
     <div class="page-layout col-md-12">
        <router-view/>
    </div>

  </div>
</template>
<script>
  import Header from '@/views/Header.vue'
  export default{
    components:{
      Header
    },
    data(){
      return{
        isHome:true,
      }
    },
    watch:{
        $route(){
            if(this.$route.name != 'home'){
                this.isHome = false
            }
            else{
                this.isHome = true
            } 
        } 
    },
    mounted(){
        if(this.$route.name != 'home'){
                this.isHome = false
        }
        else{
            this.isHome = true
        } 
    }
  }
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
