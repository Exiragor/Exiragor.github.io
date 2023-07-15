<script>
    export let href = '';
</script>

<a href={href}>
    <div class="mouse-icon">
        <div class="scroll bg-orange-500"></div>
    </div>
</a>

<style>
    .mouse-icon {
        border: 2px solid #fff;
        border-radius: 16px;
        display: block;
        height: 50px;
        margin: 100px auto;
        position: absolute;
        left: 0;
        right: 0;
        width: 30px;
        z-index: 10;
    }
    .mouse-icon .scroll {
        animation-delay: 0s;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: scrolling;
        animation-play-state: running;
        animation-timing-function: linear;
    }
    .mouse-icon .scroll {
        border-radius: 10px;
        height: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 4px;
        width: 4px;
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