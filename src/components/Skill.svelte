<script>
    export let name = '';
    export let progress = '100';

    let width = '0';

    // animate progress usage
    setTimeout(() => {
        width = progress;
    });
</script>

<div class="flex flex-col">
    <span class="ml-2 text-sm font-medium">{name}</span>

    <div class="w-full rounded-full dark:bg-gray-700 h-5 bg-neutral-300">
        <div class="bg-primary-600 h-5 rounded-full transition-all ease-in-out duration-700" style="width: {width}%;"></div>
    </div>
</div>
