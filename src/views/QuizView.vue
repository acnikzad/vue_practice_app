<template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <QuizApp msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import QuizApp from '@/components/QuizApp.vue'
  
  export default {
    name: 'QuizView',
    components: {
      QuizApp
    }
  }
  </script>
  