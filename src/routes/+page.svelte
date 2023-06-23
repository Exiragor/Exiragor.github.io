<script>
    import Personal from '../components/Personal.svelte'
    import Links from '../components/Links.svelte'
</script>

<main>
    <div class="block">
        <Personal />
    </div>

    <div class="block">
        <Links />
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

