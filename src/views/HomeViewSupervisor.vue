<template>
  <body>
    <NavComponentSupervisor/>
    <h1>Supervisor</h1>
  </body>
</template>

<script>
import NavComponentSupervisor from '@/components/NavComponentSupervisor.vue';
export default {
    name:"HomeViewSupervisor",
    components:{
        NavComponentSupervisor
    },
    methods:{
      check_user(){
        let user = localStorage.getItem("supervisor-details");
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