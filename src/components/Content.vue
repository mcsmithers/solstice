<template>
  <div class="content-container">
    <app-banner></app-banner>
    <!-- <app-list-posts></app-list-posts> -->
  </div>
</template>

<script>
// import ListPosts from './ListPosts'
import Banner from './Banner.vue'

export default {
  name: 'Content',
  components: {
    // 'app-list-posts': ListPosts,
    'app-banner': Banner
  },
  created () {
    this.$store.dispatch('retrieveAllPosts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
  padding: 2em;
}
</style>
