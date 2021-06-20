<template>
  <div class="content-container">
    <h1>List of Posts</h1>
    <br />
    <table id="posts-table">
      <!-- Table Header Row -->
      <tr>
        <th>Id</th>
        <th>User Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td> {{ post.userId }} </td>
        <td>
          <router-link to="/details" v-on:click="save">{{ post.title }}</router-link>
        </td>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Posts',
  props: {
    posts: Array
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapMutations(['setDetails']),
    save () {
      this.$store.dispatch('retrieveDetailData')
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
