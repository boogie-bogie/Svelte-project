<script>
  import { link, push } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Logo from "~/components/Logo.svelte";

  const menus = [
    {
      href: "/",
      name: "Search",
    },
    {
      href: "/movie/tt4520988",
      name: "Movie",
      path: "/movie/*",
    },
    {
      href: "/about",
      name: "About",
      path: "/about",
    },
  ];
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as { href, name, path } (name)}
        <li>
          <a use:link use:active={path} {href}> {name}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="user" on:click={(event) => push("/about")}>
    <img src="/assets/svelte.png" alt="User" />
  </div>
</header>

<style lang="scss">
  header {
    padding: 40px 40px;
    background-color: #ff3b3be1;
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    // @media #{$mobile} {
    //     padding: 14px 20px;
    // }
    nav {
      margin-left: 40px;
      // @media #{$mobile} {
      //     display: none;
      // }
      ul {
        display: flex;
        li {
          margin-left: 20px;
          &:first-child {
            margin-left: 0;
          }
          a {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #ffffff6e;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: 0.4s;
      // @media #{$mobile} {
      //     right: 20px;
      // }
      &:hover {
        background-color: lighten(#fff, 60%);
      }
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
  header :global(a.active) {
    color: #ffc900 !important;
  }
  :global(body) {
    height: 3000px;
  }
</style>
