<template>
  <section v-if="movie" class="movie">
    <div class = "content">
      <a :href="'https://www.imdb.com/title/' + movie.imdbID">
        <img class="plot" v-if="movie.Poster != 'N/A' || movie.Type == 'movie'" :src="movie.Poster" />
        <img class="plot" v-else src="@/assets/images/unavailable.png"/>
      </a>
      
      <table class = "info">
        <tr>
          <h1>{{ movie.Title }}</h1>
        </tr>
        <tr>
          <td> | {{ movie.Genre }} | {{ movie.Year }} | {{ movie.Runtime }} | IMDb Rating: {{ movie.imdbRating }} |</td>
        </tr>
        <br>
        <tr>
          <td> {{ movie.Plot }}</td>
        </tr>
        <br>
        <tr>
          <td> Director: {{ movie.Director }}</td>
        </tr>
        <tr>
          <td> Writer: {{ movie.Writer }}</td>
        </tr>
        <tr>
          <td> Stars: {{ movie.Actors }}</td>
        </tr>
        <tr>
          <!-- <router-link to={{  }}> -->
          <button class="trailer" @click="close">Trailer</button>
          <button class="list" @click="close">My List</button>
          <!-- </router-link> -->
        </tr>
      </table>
    </div>
    <div class = "back">
      <button @click="close">Back</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close: function() {
      this.$store.dispatch('closeMovie').then(this.$router.push({ path: '/search' }));
    }
  },
  computed: {
    movie: function() {
      return this.$store.getters.movieDetails;
    }
  }
};
</script>

<style></style>