<script>
    import {Avatar} from 'flowbite-svelte';
    import {InfoList} from '../info';

</script>

<section id="about" class="bg-neutral-800 px-4 py-16 md:py-24 lg:px-8">
    <div class="mx-auto max-w-screen-lg">
        <div class="grid grid-cols-1 gap-y-4 md:grid-cols-4">
            <div class="col-span-1 flex justify-center md:justify-start">
                <Avatar src="/avatar.jpg" size="xl" rounded/>
            </div>
            <div class="col-span-1 flex flex-col gap-y-6 md:col-span-3">
                <div class="flex flex-col gap-y-2">
                    <h2 class="text-2xl font-bold text-white text-center md:text-left">About me</h2>
                    <p class="prose prose-sm text-gray-300 sm:prose-base">
                        As you might guess, I love programming :) I started to get involved in development since school,
                        initially
                        attracted backend, but then moved to the frontend. Sometimes I try myself in different
                        technologies on pet
                        projects. In my free time I enjoy chess, travelling, movies and coffee. I periodically install
                        Linux for
                        myself until I burn out from it. I dreamed of getting into a cool team and company, so I ended
                        up in Tinkoff
                        crew and like it!
                    </p>
                </div>

                <InfoList/>
            </div>
        </div>
    </div>
</section>

