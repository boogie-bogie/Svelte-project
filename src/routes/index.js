import Home from './Home.svelte'
import Movie from './Movie.svelte'
import About from './About.svelte'
import NotFound from './NotFound.svelte'

export default {
    "/": Home, // 8080
    '/movie/:id': Movie, // 8080/#/movie
    "/about": About, // 8080/#/about
    '*': NotFound, // 404 NotFound
  }