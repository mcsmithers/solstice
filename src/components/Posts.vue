<template>
  <div class="content-container">
    <h1>List of Posts</h1>
    <br />
    <table id="posts-table">
      <!-- Table Header Row -->
      <tr>
        <th>userId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td @click="showPost(post)" v-bind:details="details">
          <router-link to="/details">{{ post.title }}</router-link>
        </td>
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
    showPost (post) {
      console.log(post)
      const detail = {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body
      }
      console.log(detail)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
