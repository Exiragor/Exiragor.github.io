<main>
    <div class="block">
        <div class="avatar"></div>
        <h1 class="name">Lebedev Aleksander</h1>
        <h2 class="position">@frontend developer</h2>
    </div>

    <div class="block">
        <div class="links">
            <a href="t.me/exiragor" class="link"><img src="icons/telegram.svg" alt="t.me/exiragor"></a>
        </div>
    </div>
</main>

<style>
    main {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        background-image: url("/bg/1.jpg");
        color: white;
        padding: 50px;
    }

    .name {
        margin-bottom: 10px;
    }

    .position {
        margin: 0;
    }

    .block {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.58);
        padding: 25px;
    }

    .block + .block {
        margin-top: 15px;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 200px;
        background-image: url("/avatar.heic");
        background-position: 52% 45%;
        background-size: unset;
    }

    .links {
        display: flex;
    }

    .link {
        width: 50px;
        height: 50px;
    }

    .link img {
        width: inherit;
        height: inherit;
    }

    svg {
        fill: white;
    }
</style>

