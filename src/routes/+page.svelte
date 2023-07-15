<script>
    import {Home, About} from '../components';
    import {Progressbar} from "flowbite-svelte";
</script>

<div class="min-h-screen flex flex-col flex-wrap">
    <Home />
</div>

<About />

<section id="resume" class="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8">
    <div class="mx-auto max-w-screen-lg">
        <div class="flex flex-col divide-y-2 divide-neutral-300">
            <div class="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                <div class="col-span-1 flex justify-center md:justify-start">
                    <div class="relative h-max"><h2 class="text-xl font-bold uppercase text-neutral-800">Education</h2>
                        <span class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span></div>
                </div>
                <div class="col-span-1 flex flex-col md:col-span-3">
                    <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
                        <div class="flex flex-col pb-4"><h2 class="text-xl font-bold">Information Technology</h2>
                            <div class="flex items-center justify-center gap-x-2 md:justify-start"><span
                                    class="flex-1 text-sm font-medium italic sm:flex-none">MSTU "STANKIN"</span><span>•</span><span
                                    class="flex-1 text-sm sm:flex-none">August 2018</span></div>
                        </div>
                        <p>Describe your experience at school, what you learned, what useful skills you have acquired
                            etc.</p></div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                <div class="col-span-1 flex justify-center md:justify-start">
                    <div class="relative h-max"><h2 class="text-xl font-bold uppercase text-neutral-800">Work</h2><span
                            class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span></div>
                </div>
                <div class="col-span-1 flex flex-col md:col-span-3">
                    <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
                        <div class="flex flex-col pb-4"><h2 class="text-xl font-bold">Angular developer</h2>
                            <div class="flex items-center justify-center gap-x-2 md:justify-start"><span
                                    class="flex-1 text-sm font-medium italic sm:flex-none">Tinkoff</span><span>•</span><span
                                    class="flex-1 text-sm sm:flex-none">March 2022 - Present</span></div>
                        </div>
                        <p>Describe.</p></div>
                    <div class="flex flex-col pb-8 text-center last:pb-0 md:text-left">
                        <div class="flex flex-col pb-4"><h2 class="text-xl font-bold">Full-stack developer</h2>
                            <div class="flex items-center justify-center gap-x-2 md:justify-start"><span
                                    class="flex-1 text-sm font-medium italic sm:flex-none">Future group</span><span>•</span><span
                                    class="flex-1 text-sm sm:flex-none">March 2007 - February 2010</span></div>
                        </div>
                        <p>Describe.</p></div>
                </div>
            </div>
            <div id="skills" class="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
                <div class="col-span-1 flex justify-center md:justify-start">
                    <div class="relative h-max"><h2 class="text-xl font-bold uppercase text-neutral-800">Skills</h2>
                        <span class="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span></div>
                </div>
                <div class="col-span-1 flex flex-col md:col-span-3"><p class="pb-8">Here you can show a snapshot of your
                    skills to show off to employers</p>
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="flex flex-col">
                            <span class="text-center text-lg font-bold">Frontend development</span>
                            <div class="flex flex-col gap-y-2">
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Angular</span>
                                    <Progressbar class="bg-neutral-300" progress="100" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">JS</span>
                                    <Progressbar class="bg-neutral-300" progress="100" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Typescript</span>
                                    <Progressbar class="bg-neutral-300" progress="90" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">CSS</span>
                                    <Progressbar class="bg-neutral-300" progress="60" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col"><span
                                class="text-center text-lg font-bold">Backend development</span>
                            <div class="flex flex-col gap-y-2">
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Node.js</span>
                                    <Progressbar class="bg-neutral-300" progress="70" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Php</span>
                                    <Progressbar class="bg-neutral-300" progress="60" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">C#</span>
                                    <Progressbar class="bg-neutral-300" progress="40" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Gitlab CI</span>
                                    <Progressbar class="bg-neutral-300" progress="60" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col"><span class="text-center text-lg font-bold">Soft skills</span>
                            <div class="flex flex-col gap-y-2">
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Problem-solving</span>
                                    <Progressbar class="bg-neutral-300" progress="100" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Communication</span>
                                    <Progressbar class="bg-neutral-300" progress="90" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Self-learning</span>
                                    <Progressbar class="bg-neutral-300" progress="70" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Time management</span>
                                    <Progressbar class="bg-neutral-300" progress="75" size="h-5" labelInsideClass="bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col"><span class="text-center text-lg font-bold">Spoken languages</span>
                            <div class="flex flex-col gap-y-2">
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Russian</span>
                                    <div class="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                                        <div class="h-full rounded-full bg-orange-400" style="width:100%"></div>
                                    </div>
                                </div>
                                <div class="flex flex-col"><span class="ml-2 text-sm font-medium">English</span>
                                    <div class="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
                                        <div class="h-full rounded-full bg-orange-400" style="width:70%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>