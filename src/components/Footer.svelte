<footer>
  <div class="footer-github">
    <a href="https://github.com/boogie-bogie">GitHub Repo.</a>
  </div>
  <div class="footer-velog">
    <a href="https://velog.io/@boogiegie/posts">
      @{new Date().getFullYear()}
      Boogie.bogiegie
    </a>
  </div>
</footer>

<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;
    a {
      color: #cccccc81;
      font-size: larger;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .footer-github {
      padding: 20px;
    }
    .footer-velog {
      padding: 20px;
    }
  }
</style>
