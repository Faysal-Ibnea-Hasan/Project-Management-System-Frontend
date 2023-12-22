<template>
<body>
  <NavComponent />
  <CardComponent />
</body>
</template>


<script>
import CardComponent from '../components/CardComponent.vue'
import NavComponent from '../components/NavComponent.vue'

export default {
    name: "HomeViewStudent",
    components: {
        NavComponent,
        CardComponent
    },
    methods:{
      check_user(){
        let user = localStorage.getItem("student-details");
        if(!user){
          this.$router.push({path:'/'})
        }
      }
    },
    mounted(){
      this.check_user();
    }
}
</script>

<style>

</style>
