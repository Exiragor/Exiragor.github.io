<script>
    const links = [
        {src: '/icons/telegram.svg', href: 'https://t.me/exiragor', alt: 't.me/exiragor'},
        {src: '/icons/email.svg', href: 'mailto:exiragor@yandex.ru', alt: 'exiragor@yandex.ru'},
        {
            src: '/icons/github-mark-white.svg',
            href: 'https://github.com/Exiragor',
            alt: 'https://github.com/Exiragor'
        },
    ];
</script>

<div class="flex justify-between w-3/4">
    {#each links as link}
        <a href={link.href} target="_blank" class="w-10 md:w-14">
            <img src={link.src} alt={link.alt}>
        </a>
    {/each}
</div>
