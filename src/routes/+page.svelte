<script>
    import Personal from '../components/Personal.svelte'
    import Links from '../components/Links.svelte'
</script>

<main>
    <section>
        <div class="block">
            <Personal />
        </div>

        <div class="block">
            <Links />
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.58);
        padding: 25px;
    }

    .block + .block {
        margin-top: 10px;
    }
</style>

