<template>
  <div class="content-container">
<app-banner v-bind:bannerMessage="messageToDisplay" v-bind:bannerType="messageType" v-on:clear-banner="clearMessage"></app-banner>
<app-posts v-bind:posts="posts"></app-posts>
  </div>
</template>

<script>
import Posts from './Posts.vue'
import Banner from './Banner.vue'
import axios from 'axios'

export default {
  name: 'Content',
  components: {
    'app-posts': Posts,
    'app-banner': Banner
  },
  data () {
    return {
      posts: [],
      messageToDisplay: '',
      messageType: 'Info'
    }
  },
  created () {
  // GET request for user data
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
      // handle success
        this.messageType = 'Success'
        this.messageToDisplay = 'SUCCESS! Loaded posts data! Hooray!'

        // Add the 'editing' field to each user object
        var mountedPosts = response.data.map(function (post) {
          post.editing = false
          return post
        })
        this.posts = mountedPosts

        console.log('Posts array in success callback:')
        console.log(this.posts)
      })
      .catch((error) => {
      // handle error
        console.log(error)
        this.errorMessage = 'Error! Unable to load Posts data!'
        this.messageType = 'Error'
        this.messageToDisplay = 'ERROR! Unable to load user data!  Oh no!'
      })
      .finally((response) => {
      // always executed
        console.log('Finished!')
      })
  },
  methods: {
    clearMessage: function () {
      this.messageToDisplay = ''
      this.messageType = 'Info'
    }
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
