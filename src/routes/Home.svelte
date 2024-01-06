<script>
    import Headline from "~/components/Headline.svelte";
    import Search from "~/components/Search.svelte";
    import MovieList from "~/components/MovieList.svelte";
    import { initMovies } from "~/store/movie.js";

    initMovies();
</script>

<div class="container">
    <Headline />
    <Search />
    <MovieList />
</div>

<!-- <style>
    .container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 40px 0 0;
        position: relative;
    }
</style> -->
