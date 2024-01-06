<div class="user-profile">
    <div class="photos">
        <div class="photo">
            <img src="/assets/svelte.png" alt="User" />
        </div>
        <div class="photo">
            <img src="/assets/netlify.png" alt="User" />
        </div>
    </div>
    <div class="details">
        <div class="name">Lee KyungBok</div>
        <div class="email">boogie.bogiegie@gmail.com</div>
        <br />
        <div class="blog">https://velog.io/@boogiegie</div>
        <br />
        <div class="phone">Project 소개</div>
    </div>
</div>

<style lang="scss">
    .user-profile {
        padding: 80px 0;
        .photos {
            display: flex;
            justify-content: center;
            .photo {
                flex-shrink: 0;
                width: 230px;
                height: 230px;
                padding: 30px;
                box-sizing: border-box;
                background-color: #ffffff;
                border-radius: 50%;
                border: 12px solid $color--black-90;
                &:first-child {
                    margin-right: -80px;
                }
                img {
                    width: 100%;
                }
            }
        }
        .details {
            margin-top: 20px;
            text-align: center;
            .name {
                font-size: 40px;
                font-family: "Noto Sans KR", "Roboto", sans-serif;
                margin-bottom: 20px;
            }
        }
    }
</style>
