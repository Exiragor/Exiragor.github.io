<script>
    import InfoRow from './InfoRow.svelte';
    import {getAge} from '../../utils/get-age.js';

    const list = [
        {
            name: 'Location',
            value: 'Moscow, Russia',
            iconLink: '/icons/location.svg',
        },
        {
            name: 'Age',
            value: getAge(new Date(1996, 7, 26)),
            iconLink: '/icons/age.svg'
        },
        {
            name: 'Nationality',
            value: 'Russian',
            iconLink: '/icons/nationality.svg',
        },
        {
            name: 'Interests',
            value: 'Chess, coffee, movies',
            iconLink: '/icons/interests.svg',
        },
        {
            name: 'Study',
            value: 'MSTU "STANKIN"',
            iconLink: '/icons/study.svg',
        },
        {
            name: 'Employment',
            value: 'Tinkoff',
            iconLink: '/icons/employment.svg',
        },
    ];
</script>

<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each list as item}
        <InfoRow name={item.name}
                 value={item.value}
                 iconLink={item.iconLink}
        />
    {/each}
</ul>