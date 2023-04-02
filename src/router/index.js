import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetails from '../components/MovieDetails';
import Genre from '../components/Genre';
import List from '../components/List.vue';
import Search from '../components/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/details',
    name: 'MovieDetails',
    component: MovieDetails
  },
  {
    path: '/genre',
    name: 'Genre',
    component: Genre
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
];

const router = new VueRouter({
  routes
});

export default router;