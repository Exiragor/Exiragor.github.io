<script>
    import {  Avatar, Heading } from 'flowbite-svelte'
</script>

<div class="flex flex-col items-center space-y-4 space-x-4 mb-4 lg:mb-10">
    <Avatar src="/avatar-1.jpg" size="xl" />
    <Heading tag="h1" class="text-white text-center" customSize="text-3xl font-extrabold md:text-5xl lg:text-6xl">Lebedev Aleksandr</Heading>
    <Heading tag="h4" class="text-white text-center" customSize="text-xs md:text-xl lg:text-2xl">
        Frontend developer
        <span class="text-orange-500 text-">•</span>
        Coffee drinker
        <span class="text-orange-500 text-">•</span>
        Chess player
    </Heading>
</div>
