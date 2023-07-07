<script>
	import '../app.postcss';
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';

    export const routes = [
        { link: '/', label: 'Home'},
        { link: '/skills', label: 'Skills'},
    ];
</script>

<div class="bg-gray-900 min-h-screen">
    <header class="mb-40">
        <Navbar let:hidden let:toggle class="dark:bg-gray-800">
            <div></div>
            <NavHamburger on:click={toggle} />
            <NavUl {hidden}>
                {#each routes as route}
                    <NavLi href={route.link}
                           active={$page.url.pathname === route.link}
                    >
                        {route.label}
                    </NavLi>
                {/each}
            </NavUl>
        </Navbar>
    </header>

    <slot />
</div>
