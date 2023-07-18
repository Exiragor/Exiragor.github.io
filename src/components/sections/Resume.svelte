<script>
    import {ResumeBlock, Company} from "../";
    import {Progressbar} from "flowbite-svelte";
</script>

<section id="resume" class="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8">
    <div class="mx-auto max-w-screen-lg">
        <div class="flex flex-col divide-y-2 divide-neutral-300">
            <ResumeBlock name="Education">
                <Company name={'MSTU "STANKIN"'}
                         position="Information Technology"
                         timeLine="August 2018"
                />
            </ResumeBlock>
            <ResumeBlock name="Work">
                <Company name="Tinkoff"
                         position="Angular developer"
                         timeLine="February 2022 - Present"
                >
                    Development of an interface for an internal access control project for employees (IDM).
                </Company>
                <Company name="Mir-dit"
                         position="Frontend developer"
                         timeLine="May 2018 - February 2022"
                >
                    <h3 class="text-base font-bold mb-4">
                        Project Atomyze(New technologies), participation from Mir-dit.
                    </h3>
                    The American project Atomyze creates a platform using blockchain technology that modernizes the
                    market for goods. Our solution will connect investors, financial services professionals and
                    commercial users of metals and other commodities.
                    Development also takes place together with the American team.
                    <br><br>
                    <span class="italic">Tech stack</span>: Angular 12, ts, rxjs, grpc, material, scss, npm, git.

                    <h3 class="text-base font-bold mb-4 mt-7">
                        Project FSSP(OTR), participation from Mir-dit.
                    </h3>
                    Closed project. A single personal account for federal bailiff services. He was engaged in the
                    development of the interface and the main components of the application.
                    <br><br>
                    <span class="italic">Tech stack</span>: Angular 9, typescript, rxjs, graphql, ng-zorro-antd, node.js, less.

                    <h3 class="text-base font-bold mb-4 mt-7">
                        ETD(OTR) project, participation from Mir-dit.
                    </h3>
                    Closed project. A single point of access for government customers, such as the Ministry of Finance
                    and Foms. Developed interfaces for technical
                    support and development of browser page compliance, including cryptopro.

                    <h3 class="text-base font-bold mb-4 mt-7">
                        Project EAT (LANIT), participation from the Mir-dit.
                    </h3>
                    Project EAT (Unified
                    trade aggregator) for public procurement of small businesses. Provides the opportunity to
                    participate in
                    customer or supplier roles. Provides the ability to view the product catalog,
                    an automatic system of bidding by suppliers for a specific order, viewing the register of all
                    procurement. The entire legal component of the procurement process also takes place online with
                    using ES (electronic signature).
                    <br><br>
                    <span class="italic">Tech stack</span>: Vue, Vuex, Nodejs, js, scss, webpack, npm, git, docker, codeceptjs, selenium, webdriver.
                </Company>
                <Company name="Future group"
                         position="Full-stack developer"
                         timeLine="June 2016 - May 2018"
                >
                    Development and support of sites in a web studio.
                    <br><br>
                    <span class="italic">Tech stack</span>: Js, Bitrix, Laravel, Vue.js, react, css.
                </Company>
            </ResumeBlock>

            <ResumeBlock name="Skills">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="flex flex-col">
                        <span class="text-center text-lg font-bold">Hard skills</span>
                        <div class="flex flex-col gap-y-2">
                            <div class="flex flex-col">
                                <span class="ml-2 text-sm font-medium">Angular</span>
                                <Progressbar class="bg-neutral-300" progress="100" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">JS</span>
                                <Progressbar class="bg-neutral-300" progress="100" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Typescript</span>
                                <Progressbar class="bg-neutral-300" progress="90" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">CSS</span>
                                <Progressbar class="bg-neutral-300" progress="75" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Node.js</span>
                                <Progressbar class="bg-neutral-300" progress="70" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Php</span>
                                <Progressbar class="bg-neutral-300" progress="60" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">C#</span>
                                <Progressbar class="bg-neutral-300" progress="40" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Gitlab CI/CD</span>
                                <Progressbar class="bg-neutral-300" progress="60" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-center text-lg font-bold">Soft skills</span>
                        <div class="flex flex-col gap-y-2">
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Problem-solving</span>
                                <Progressbar class="bg-neutral-300" progress="100" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Communication</span>
                                <Progressbar class="bg-neutral-300" progress="90" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Self-learning</span>
                                <Progressbar class="bg-neutral-300" progress="70" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Time management</span>
                                <Progressbar class="bg-neutral-300" progress="75" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Accountability</span>
                                <Progressbar class="bg-neutral-300" progress="90" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Emotional intelligence</span>
                                <Progressbar class="bg-neutral-300" progress="70" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">Russian</span>
                                <Progressbar class="bg-neutral-300" progress="100" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                            <div class="flex flex-col"><span class="ml-2 text-sm font-medium">English</span>
                                <Progressbar class="bg-neutral-300" progress="70" size="h-5"
                                             labelInsideClass="bg-orange-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </ResumeBlock>
        </div>
    </div>
</section>