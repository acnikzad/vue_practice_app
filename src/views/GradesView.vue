<template>
    <div class="home">
      <GradesComp />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import GradesComp from '@/components/GradesComp.vue';
  
  export default {
    name: 'GradesApp',
    components: {
      GradesComp
    }
  }
  </script>