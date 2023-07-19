<script>
    import Skill from './Skill.svelte';
    import {useWatcher} from "../watcher/index.js";
    import {onMount} from "svelte";

    export let name = '';
    export let items = [];

    let useZeroWidth = true;

    const animate = () => {
        setTimeout(() => {
           useZeroWidth = false;
        });
    };


    onMount(() => {
        useWatcher(['#skills'], (entries) => {
            const isEnter = entries.find(e => e.isIntersecting);

            if (isEnter) {
                animate();
            } else {
                useZeroWidth = true;
            }
        });
    })
</script>

<div id="skills" class="flex flex-col">
    <span class="text-center text-lg font-bold">{name}</span>
    <div class="flex flex-col gap-y-2">
        {#each items as item}
            <Skill name={item.name} progress={useZeroWidth ? 0 : item.progress} />
        {/each}
    </div>
</div>