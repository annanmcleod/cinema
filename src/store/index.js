import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
    movieDetails: null,
    error: ''
  },
  getters: {
    movieList: state => state.movieList,
    movieDetails: state => state.movieDetails,
    error: state => state.error
  },
  mutations: {
    fetchMovies: (state, payload) => {
      if (payload.Response == 'True') {
        const filteredMovies = payload.Search.filter(movie => movie.Poster !== 'N/A');
        state.movieList = filteredMovies;
        state.movieDetails = null;
      }
      else {
        if (payload.Error == 'Something went wrong.') {
          state.movieList = null;
        }
        state.error = payload.Error;
        setTimeout(function() {
          state.error = '';
          state.movieList = [];
        }, 5000);
      }
    },
    emptyList: state => {
      state.movieList = [];
    },
    fetchMovieDetails: (state, payload) => {
      state.movieDetails = payload;
      router.push({ path: 'details' });
    },
    closeMovie: state => {
      state.movieDetails = null;
    }
  },
  actions: {
    fetchMovies({ commit }, payload) {
      axios
        .get(`https://www.omdbapi.com/?apikey=512f2238&s=${payload}&type=movie&poster=w500&h=500`)
        .then(res => {
          const filteredResponse = {
          ...res.data,
          Search: res.data.Search.filter(movie => movie.Poster !== 'N/A')
        };
          commit('fetchMovies', res.data);
        });
    },
    emptyList({ commit }) {
      commit('emptyList');
    },
    fetchMovieDetails({ commit }, payload) {
      axios
        .get(`https://www.omdbapi.com/?apikey=512f2238&t=${payload}&type=movie&poster=w500`)
        .then(res => {
          if (res.data.Poster !== 'N/A') {
          commit('fetchMovieDetails', res.data);
          }
        });
    },
    closeMovie({ commit }) {
      commit('closeMovie');
    }
  },
  modules: {}
});