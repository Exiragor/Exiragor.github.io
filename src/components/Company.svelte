<script>
    import { Avatar } from "flowbite-svelte"

    export let name = 'Company name';
    export let position = 'As a Frontend developer'
</script>

<div class="flex items-center space-x-4 mb-10">
    <Avatar size="lg" rounded />
    <div class="space-y-1 font-medium dark:text-white">
        <h1 class="text-2xl font-extrabold">{name}</h1>
        <h2 class="text-xl text-gray-500 dark:text-gray-400">{position}</h2>
    </div>
</div>