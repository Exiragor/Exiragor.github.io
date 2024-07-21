<script>
	import '../app.postcss';
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { Footer } from '../components';
	import { useWatcher } from '../watcher';

	const routes = [
		{ id: 'home', label: 'Home', intersectWeight: 1 },
		{ id: 'about', label: 'About', intersectWeight: 2 },
		{ id: 'resume', label: 'Resume', intersectWeight: 1 },
		{ id: 'skills', label: 'Skills', intersectWeight: 2 }
	];

	let activeLink = '';

	onMount(() => {
		const intersectSet = new Set();

		const changeLink = () => {
			const { active } = Array.from(intersectSet).reduce(
				(acc, id) => {
					const weight = routes.find((x) => x.id === id)?.intersectWeight ?? 0;
					if (weight > acc.weight) {
						return { active: id, weight };
					}
					return acc;
				},
				{ active: '', weight: 0 }
			);
			console.log(intersectSet, active);
			activeLink = active;
			history.replaceState({}, '', `#${activeLink}`);
		};

		useWatcher(
			routes.map((r) => `#${r.id}`),
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						intersectSet.add(entry.target.id);
					} else {
						intersectSet.delete(entry.target.id);
					}

					changeLink();
				});
			}
		);
	});
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
					href={'#' + route.id}
					class="font-bold"
					active={activeLink === route.id}
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
