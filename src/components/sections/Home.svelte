<script>
    import {MouseIcon, Personal, Links} from '../';
</script>

<section id="home" class="relative bg-[url('/bg.jpeg')] flex-1 flex justify-center items-center bg-cover bg-center">
    <div class="absolute top-0 left-0 bg-opacity-60 bg-black w-full h-full z-10"></div>
    <div class="flex flex-col items-center p-4 lg:p-6 px-6 mx-6 z-20">
        <Personal/>
        <Links/>
        <MouseIcon href="#about" />
    </div>
</section>