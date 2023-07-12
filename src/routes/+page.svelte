<script>
    import { Card } from "flowbite-svelte";
    import Personal from '../components/Personal.svelte'
    import Links from '../components/Links.svelte'

</script>

<div class="flex-1 flex justify-center items-center">
    <Card class="flex flex-col items-center max-w-lg w-full p-6 px-12">
        <Personal />
        <Links />
    </Card>
</div>
