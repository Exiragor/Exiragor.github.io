<script>
    import InfoRow from './InfoRow.svelte';
    import {infoItems} from "../../consts/index.js";
</script>

<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each infoItems as item}
        <InfoRow name={item.name}
                 value={item.value}
                 iconLink={item.iconLink}
        />
    {/each}
</ul>