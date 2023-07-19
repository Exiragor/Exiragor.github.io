<script>
    import {ResumeBlock, Company, Skills, MirDitExp} from "../";
    import {hardSkills, softSkills} from "../../consts";
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
                    <MirDitExp/>
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
                    <Skills name="Hard skills" items={hardSkills}/>
                    <Skills name="Soft skills" items={softSkills}/>
                </div>
            </ResumeBlock>
        </div>
    </div>
</section>