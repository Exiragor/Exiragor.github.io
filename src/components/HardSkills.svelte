<script>
    import 'chart.js/auto';
    import { Radar } from 'svelte-chartjs';

    export const data = {
        labels: ['Angular', 'Javascript', 'NodeJs', 'Typescript', 'Css', 'C#', 'Java', 'Php', 'Gitlab CI'],
        datasets: [{
            label: null,
            clip: 0,
            data: [10, 9, 7, 10, 6, 4, 4, 7, 5],
            onClick: () => {},
        }]
    }

    export const options = {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
</script>

<div>
    <Radar data={data} size={100} options={options} />
</div>
