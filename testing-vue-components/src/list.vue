<template>
  <div>
    <ul>
      <ListItem
        :key="index"
        v-for="(movie, index) in movies"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script>
  import ListItem from './components/list-item'

  export default {

    components: {
      ListItem
    },

    data() {
      return {
        movies: [
          'Iron Man',
          'Avengers',
          'Infitinity War',
        ]
      }
    }

  }
</script>

<style scoped>

</style>
