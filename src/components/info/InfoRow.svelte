<script>
    export let name = '';
    export let value = '';
    export let iconLink = '';
</script>

<li class="col-span-1 flex  items-start gap-x-2">
    <img class="h-5 w-5" src={iconLink} alt={name}>
    <span class="text-sm font-bold text-white">{name}:</span>
    <span class=" text-sm text-gray-300">{value}</span>
</li>

