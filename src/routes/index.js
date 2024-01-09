import Home from "./page/Home.svelte";
import Movie from "./page/Movie.svelte";
import About from "./page/About.svelte";
import NotFound from "./page//NotFound.svelte";

export default {
  "/": Home, // 8080
  "/movie/:id": Movie, // 8080/#/movie
  "/about": About, // 8080/#/about
  "*": NotFound, // 404 NotFound
};
