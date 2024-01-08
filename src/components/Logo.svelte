<script>
  import { link } from "svelte-spa-router";
</script>

<a use:link href="/"><span>Gather</span></a>

<style lang="scss">
  a {
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 46px;
    color: #fff;
    text-decoration: none;
  }
  span {
    color: #fff;
    padding: 20px 0px 0px 20px;
  }
</style>
