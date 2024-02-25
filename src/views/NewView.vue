<template>
    <div class="newTask">
      <img alt="Vue logo" src="../assets/logo.png">
      <NewTask msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NewTask from '@/components/NewTask.vue'
  
  export default {
    name: 'NewView',
    components: {
      NewTask
    }
  }
  </script>