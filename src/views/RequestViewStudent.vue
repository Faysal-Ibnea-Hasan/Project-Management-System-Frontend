<template>
  <body>
    <NavComponent/>
    <RequestComponentStudent/>
  </body>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
import RequestComponentStudent from '@/components/RequestComponentStudent.vue';



export default {
    name:"RequestViewStudent",
    components:{NavComponent,RequestComponentStudent}
}
</script>

<style>

</style>