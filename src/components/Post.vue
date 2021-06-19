<template>
  <div class="content-container">
      <h1>Here is a Fantastic Post</h1>
      <br>
  <table id="post-table">
      <!-- Table Header Row -->
      <tr>
        <th>userId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr>
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Post',
  components: {

  },
  created () {

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
