<template>
    <div>
      <div class = "nav">
        <router-link to="/#/#">
            <img src = "@/assets/images/logo2.png" class = "logo" alt = "cinescope"/>
        </router-link>
        
        <div class = "links">
          <ul>
            <li><a><router-link to="/#/#">Home</router-link></a></li>
            <li><a><router-link to="/genre">Genre</router-link></a></li>
            <li><a><router-link to="/list">My List</router-link></a></li>
          </ul>
        </div>
      </div>
      <Movie />

      <div v-if="movieList == null" class="error">
        <p>Please enter a movie name</p>
      </div>
      <div v-else-if="error == 'Too many results.'" class="error">
        <p>{{ error }}</p>
      </div>
      <div v-else-if="error == 'Movie not found!'" class="error">
        <p>{{ error }}</p>
      </div>

      <section v-else class="results">
        <div
          v-for="movie in movieList" :key="movie.imdbID"
          class="result"
          @click="getMovieDetails(movie.Title)">
          <div v-if="movie.Poster != 'N/A'" >
              <div class = "container">
                <div class = "parent">
                  <div class = "boxy">
                    <div class = "card">
                      <img :src="movie.Poster"/>
                      <div class = "button"><MovieDetails /><p>View Details</p></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div v-else>
            <img src="@/assets/images/unavailable2.png" />
          </div>
        </div>
      </section>
    </div>
</template>


  
  <script>

  export default {
    name: "app",
    data: () => ({
      searchTerm: "",
      loading: false
    }),
    methods: {
      getMovieList: function() {
        this.$store.dispatch("fetchMovies", this.searchTerm);
      },
      getMovieDetails: function(title) {
        this.$store.dispatch("fetchMovieDetails", title);
      },
      clearMovieList: function() {
        this.searchTerm = "";
        this.$store.dispatch("emptyList");
      }
    },
    computed: {
      movieList: function() {
        return this.$store.getters.movieList;
      },
      error: function() {
        return this.$store.getters.error;
      }
    }
  };
  </script>
  
  <style></style>