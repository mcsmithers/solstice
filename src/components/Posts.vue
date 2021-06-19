<template>
  <div class="content-container">
      <h1>List of Posts</h1>
      <br>
  <table id="posts-table">
      <!-- Table Header Row -->
      <tr>
        <th>userId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="post in posts" :key="post.id">
        <td @click="showPost">{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: Array
  },
  methods: {
    showPost (value) {
      console.log('showing a post for ', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
