<script>
	export let name = 'Company name';
	export let position = 'Frontend developer';

	export let timeLine = '';
</script>

<div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
	<div class="flex flex-col pb-4">
		<h2 class="text-xl font-bold">{position}</h2>
		<div class="flex items-center justify-center gap-x-2 md:justify-start">
			<span class="text-sm font-medium italic sm:flex-none">
				{name}
			</span>
			<span>•</span>
			<span class="text-sm sm:flex-none">{timeLine}</span>
		</div>
	</div>
	<p><slot /></p>
</div>
