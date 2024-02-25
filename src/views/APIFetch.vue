<template>
    <div>
      <h1>Blog Posts</h1>
      <!-- Loading Indicator -->
      <p v-if="isLoading">Loading posts...</p>
  
      <!-- Error Message -->
      <p v-if="error" style="color: red;">Failed to load posts: {{ error }}</p>
  
      <!-- Posts List -->
      <ul v-if="posts.length > 0">
        <li v-for="post in posts" :key="post.id">
          <a href="#" v-on:click.prevent="selectPost(post)">{{ post.title }}</a>
        </li>
      </ul>
  
      <!-- Selected Post Details -->
      <div v-if="selectedPost">
        <h2>{{ selectedPost.title }}</h2>
        <p>{{ selectedPost.body }}</p>
        <button v-on:click="clearSelection">Close</button>
      </div>
    </div>
</template>
<script>
export default {
    name: 'ApiApp',
    data() { 
        return { 
            posts: [],
            isLoading: false,
            error: null,
            selectedPost: null,
        }
    },
    methods: { 
        selectPost(post) {
            this.selectedPost = post;
        },
        
        clearSelection() {
            this.selectedPost = null;
        },
    },

    computed: {

    },

    async mounted() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = await response.json();
            this.posts = data.slice(0, 5)
        } catch (error) {
            console.error('Error fetching posts', error)
        }
    }   
}


</script>
