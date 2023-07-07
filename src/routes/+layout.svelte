<script>
	import '../app.postcss';
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<div class="bg-gray-900 min-h-screen">
    <header class="mb-40">
        <Navbar let:hidden let:toggle class="dark:bg-gray-800">
            <div></div>
            <NavHamburger on:click={toggle} />
            <NavUl {hidden}>
                <NavLi href="/" active={true}>Home</NavLi>
                <NavLi href="/skills">Skills</NavLi>
            </NavUl>
        </Navbar>
    </header>

    <slot />
</div>
