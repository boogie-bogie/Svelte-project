<script>
  import { fade } from "svelte/transition";
  import Router, { location } from "svelte-spa-router";
  import routes from "~/routes/index.js";
  import Header from "~/components/Header.svelte";
  import Footer from "~/components/Footer.svelte";

  import axios from "axios";

  async function test() {
    const res = await axios.get("/.netlify/functions/test");
    console.log(res);
  }
  test();
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router {routes} restoreScrollState={true} />
  </div>
{/key}
<Footer />
