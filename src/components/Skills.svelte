<script>
    import 'chart.js/auto';
    import { Radar } from 'svelte-chartjs';

    export let data;
    export let title;

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                angleLines: {
                    color: 'rgb(107 114 128)'
                },
                grid: {
                    color: 'rgb(107 114 128)'
                },
                ticks: {
                    backdropColor: 'rgb(31 41 55)',
                },
                pointLabels: {
                    color: '#fff'
                }
            }
        },
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderColor: '#fff',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: 'rgb(107 114 128)',
        pointHoverBorderColor: '#fff',
    }
</script>

<div>
    <h1 class="text-3xl font-extrabold text-white text-center">{title}</h1>

    <Radar data={data} size={100} options={options} />
</div>
