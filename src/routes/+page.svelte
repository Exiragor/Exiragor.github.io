<script>
    import Personal from '../components/Personal.svelte'
    import Links from '../components/Links.svelte'
</script>

<main>
    <section>
        <div class="block personal-block">
            <Personal />
        </div>

        <div class="block">
            <Links />
        </div>
    </section>
</main>

<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-image: url("/bg/1.jpg");
        color: white;
    }

    section {
        height: 100%;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding: 50px;
    }

    .block {
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.65);
        padding: 25px;
    }

    .block + .block {
        margin-top: 20px;
    }

    .personal-block {
        padding-top: 75px;
        padding-bottom: 75px;
    }

    @media screen and (max-width: 64em) {
        .block {
            width: 100%;
        }
    }
</style>

