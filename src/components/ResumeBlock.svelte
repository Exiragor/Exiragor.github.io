<script>
    export let name = ''
</script>

<div class="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
    <div class="col-span-1 flex justify-center md:justify-start">
        <div class="relative h-max">
            <h2 class="text-xl font-bold uppercase text-neutral-800">{name}</h2>
            <span class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
        </div>
    </div>
    <div class="col-span-1 flex flex-col md:col-span-3">
        <slot/>
    </div>
</div>