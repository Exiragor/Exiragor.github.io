<script>
    import {Progressbar} from "flowbite-svelte";

    export let name = '';
    export let progress = '100';
</script>

<div class="flex flex-col">
    <span class="ml-2 text-sm font-medium">{name}</span>
    <Progressbar class="bg-neutral-300" progress={progress} size="h-5" labelInsideClass="bg-orange-400"/>
</div>

