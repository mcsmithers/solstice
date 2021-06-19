<template>
  <div class="content-container">
    <p>This is where you can retrieve user posts</p>
    <br>
    <br>
    <h3>Most recent Post:</h3>
    <br>
    <table id="posts-table">
      <!-- Table Header Row -->
      <tr>
        <th>UserId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="post in allPosts" :key="post.id">
        <td>{{allPosts.userId }}</td>
        <td>{{ allPosts.title }}</td>
        <td>{{ allPosts.body }}</td>
      </tr>
    </table>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ListPosts'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 70%;
}

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
