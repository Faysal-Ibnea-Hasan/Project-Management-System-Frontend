<template>
    <body>
        <NavComponent/>
        <GroupComponent/>
    </body>
</template>
        
        

<script>
import GroupComponent from '@/components/GroupComponent.vue';
import NavComponent from '@/components/NavComponent.vue';

NavComponent
export default {
    name:"GroupViewStudent",
    components:{
        NavComponent,
        GroupComponent
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