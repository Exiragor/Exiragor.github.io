<script>
    export let href = '';
</script>

<a href={href}>
    <div class="absolute left-0 right-0 border-2 border-white rounded-3xl w-8 h-14 z-10 mx-auto my-24">
        <div class="scroll relative rounded-2xl h-2.5 mx-auto bg-orange-500 top-2 w-1"></div>
    </div>
</a>

<style>
    .scroll {
        animation-delay: 0s;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: scrolling;
        animation-play-state: running;
        animation-timing-function: linear;
    }

    @keyframes scrolling {
        0% {
            opacity: 0;
            top: 5px;
        }
        30% {
            opacity: 1;
            top: 10px;
        }
        100% {
            opacity: 0;
            top: 25px;
        }
    }
</style>