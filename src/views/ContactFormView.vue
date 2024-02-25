<template>
    <div class="ContactApp">
      <ContactApp />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ContactApp from '@/components/ContactApp.vue';
  
  export default {
    name: 'ContactView',
    components: {
      ContactApp
    }
  }
  </script>
  