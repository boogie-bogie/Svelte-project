<script>
    import _upperFirst from "lodash/upperFirst";
    import { searchMovies } from "~/store/movie.js";

    const types = ["movie", "series", "episode"];
    const years = [];
    for (let y = new Date().getFullYear(); y >= 1985; y -= 1) {
        years.push(y);
    }
    const numbers = [10, 30, 50, 100];

    let title = "";
    let type = "movie";
    let year = "";
    let number = 10;

    function apply() {
        searchMovies({
            title: title,
            type: type,
            year: year,
            number: number,
        });
    }
</script>

<div class="search">
    <div class="text-field">
        <input
            bind:value={title}
            placeholder="Search for Movies, Series & more"
            type="text"
            on:keydown={(event) => {
                event.key === "Enter" && apply();
            }}
        />
    </div>

    <div class="select">
        <select bind:value={type}>
            {#each types as t (t)}
                <option value={t}>{_upperFirst(t)}</option>
            {/each}
        </select>
    </div>

    <div class="select">
        <select bind:value={year}>
            <option value="">All years</option>
            {#each years as y (y)}
                <option>{y}</option>
            {/each}
        </select>
    </div>

    <div class="select">
        <select bind:value={number}>
            {#each numbers as n (n)}
                <option>{n}</option>
            {/each}
        </select>
    </div>

    <button class="btn" on:click={apply}> Gather 🐿️ </button>
</div>

<style lang="scss">
    .search {
        display: grid;
        grid-template-columns: 1fr repeat(4, 120px);
        grid-gap: 15px;

        .text-field {
            display: inline-block;
            height: 50px;
            input {
                width: 100%;
                height: 100%;
                background-color: rgba(65, 57, 57, 0.658);
                outline: none;
                border: none;
                padding: 0 20px;
                box-sizing: border-box;
                color: #fff;
                font-weight: 700;
                border-radius: 4px;
                &::placeholder {
                    color: #c5c5c5b2;
                }
            }
        }
        .select {
            height: 50px;
            position: relative;
            &::after {
                content: "";
                width: 0;
                height: 0;
                border-top: 5px solid #555;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                position: absolute;
                top: 50%;
                right: 15px;
                margin-top: -1px;
            }
            select {
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                font-size: 14px;
                color: #e6e6e6de;
                font-weight: 700;
                border-radius: 4px;
                background-color: rgba(65, 57, 57, 0.658);
                cursor: pointer;
                appearance: none;
                padding: 0 32px 0 20px;
                box-sizing: border-box;
            }
        }
        .btn {
            height: 50px;
            padding: 0 20px;
            border: none;
            outline: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            color: black;
            background-color: #ffc900;
            transition: 0.4s;
            &:hover {
                background-color: darken(#ffc900, 10%);
            }
        }
    }
</style>
