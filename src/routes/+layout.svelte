<script>
	import '../app.postcss';
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';

    export const routes = [
        { link: '/', label: 'Home'},
        { link: '/skills', label: 'Skills'},
    ];
</script>

<div class="min-h-screen flex flex-col flex-wrap">
    <header class="sticky top-0 shadow-md">
        <Navbar
                class="dark:bg-gray-800"
                let:hidden
                let:toggle
        >
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
