<script>
	import '../app.postcss';
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer } from '../components';
	import { page } from '$app/stores';

	export const routes = [
		{ link: '#home', label: 'Home' },
		{ link: '#about', label: 'About' },
		{ link: '#resume', label: 'Resume' }
	];
</script>

<header class="dark fixed top-0 z-50 w-full bg-neutral-900/50 backdrop-blur sm:block">
	<Navbar class="dark:bg-transparent p-2 md:p-0" let:hidden let:toggle>
		<div class="md:hidden" />
		<NavHamburger
			on:click={toggle}
			class="rounded-md p-2 ring-offset-gray-800/60 dark:hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:bg-orange-500 dark:text-white"
		/>
		<NavUl {hidden} class="mx-auto dark:text-white">
			{#each routes as route}
				<NavLi
					href={route.link}
					class="font-bold"
					active={$page.url.hash === route.link}
					activeClass="dark:text-orange-500"
					nonActiveClass="dark:text-neutral-100 dark:hover:text-orange-500"
				>
					{route.label}
				</NavLi>
			{/each}
		</NavUl>
	</Navbar>
</header>

<slot />

<Footer />
