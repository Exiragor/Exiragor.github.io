<script>
	export let marginTop = '5';
</script>

<li class="mb-10 ms-4">
	<div
		class="absolute w-3 h-3 bg-orange-400 rounded-full mt-{marginTop} -start-1.5 border border-white"
	/>
	<slot />
</li>
