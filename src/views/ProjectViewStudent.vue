<template>
 <NavComponent/> 
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';


export default {
    name:"ProjectViewStudent",
    components:{
        NavComponent
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