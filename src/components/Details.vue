<template>
  <div class="content-container">
      <h1>Here is a Fantastic Post Detail</h1>
      <br>
      <div>
          <h3>Post</h3>
            <h4>{{detail.title}}</h4>
            <!-- <p>{{details.userId}}</p>
            <p>{{details.body}}</p> -->
          <br/>

        <h3>Comments</h3>
        <ul>
            <!-- <p>{{details.comment}}</p>
            <p>{{details.comment}}</p>
            <p>{{details.comment}}</p> -->
        </ul>
          <br/>
          <br/>
       <h2> <router-link to="/">Back to Home</router-link></h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    detail: Object
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
