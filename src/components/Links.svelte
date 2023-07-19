<script>
    import {links} from '../consts'
    export let linkStyle = 'w-10 md:w-14';
    export let blockWidth = '9/12';
</script>

<div class="flex justify-between w-{blockWidth}">
    {#each links as link}
        <a href={link.href} target="_blank" class={linkStyle}>
            <img src={link.src} alt={link.alt}>
        </a>
    {/each}
</div>
