<script>
    import Skill from './Skill.svelte';

    export let name = '';
    export let items = [];
</script>

<div class="flex flex-col">
    <span class="text-center text-lg font-bold">{name}</span>
    <div class="flex flex-col gap-y-2">
        {#each items as item}
            <Skill name={item.name} progress={item.progress} />
        {/each}
    </div>
</div>