<template>
<body>
    <NavComponentAdmin />
    <h1>Admin</h1>
</body>
</template>


<script>
import NavComponentAdmin from '@/components/NavComponentAdmin.vue';
export default {
    name: "HomeViewAdmin",
    components: {
        NavComponentAdmin
    },
    methods:{
      check_user(){
        let user = localStorage.getItem("admin-details");
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
