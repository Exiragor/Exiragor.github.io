<script>
    export let name = '';
    export let progress = '100';
</script>

<div class="flex flex-col">
    <span class="ml-2 text-sm font-medium">{name}</span>

    <div class="w-full rounded-full dark:bg-gray-700 h-5 bg-neutral-300">
        <div class="bg-primary-600 h-5 rounded-full transition-all ease-in-out duration-1000"
             style="width: {progress}%;"
        ></div>
    </div>
</div>
