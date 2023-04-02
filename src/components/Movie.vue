<template>
    <div>
      <input
        class = "search"
        type="text"
        placeholder="Search..."
        v-model="searchTerm"
        @keypress.enter="getMovieList"/>

        <input
        class = "year"
        type="text"
        placeholder="Year..."
        v-model="yearTerm"
        @keypress.enter="getMovieList"/>
    </div>
</template>
  
  <script>
  export default {
    name: "app",
    data: () => ({
      searchTerm: "",
      yearTerm: "",
      loading: false
    }),
    methods: {
      getMovieList: function() {
        this.$store.dispatch("fetchMovies", this.searchTerm).then(this.$router.push({ path: '/search' }));;
      },
      // getMovieList: function() {
      //   this.$store.dispatch("fetchMovies", this.yearTerm).then(this.$router.push({ path: '/search' }));;
      // },
      getMovieDetails: function(title) {
        this.$store.dispatch("fetchMovieDetails", title);
      },
      // getMovieDetails: function(year) {
      //   this.$store.dispatch("fetchMovieDetails", year);
      // },
      clearMovieList: function() {
        this.searchTerm = "";
        this.yearTerm = "";
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