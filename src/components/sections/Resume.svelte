<script>
	import { ResumeBlock, Company, Skills, MirDitExp } from '../';
	import { hardSkills, softSkills } from '../../consts';
	import TimeLine from '../timeline/TimeLine.svelte';
	import TimeLineItem from '../timeline/TimeLineItem.svelte';
</script>

<section id="resume" class="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8">
	<div class="mx-auto max-w-screen-lg">
		<div class="flex flex-col divide-y-2 divide-neutral-300">
			<ResumeBlock name="Work">
				<TimeLine>
					<TimeLineItem>
						<Company name="T-Bank" position="Angular developer" timeLine="February 2022 - Present">
							Development of internal access control project for employees (IDM).
							<br /><br />
							I mainly work on front-end tasks, but I also actively participate in back-end tasks. I
							also conduct interviews on Angular at our company.

							<br /><br />
							<span class="italic">Tech stack</span>: Angular, Ts, RxJs, TaigaUI, gRPC, GraphQl, C#,
							ASP.NET
						</Company>
					</TimeLineItem>

					<TimeLineItem>
						<Company
							name="Mir-dit"
							position="Frontend developer"
							timeLine="May 2018 - February 2022"
						>
							<MirDitExp />
						</Company>
					</TimeLineItem>

					<TimeLineItem>
						<Company
							name="Future group"
							position="Full-stack developer"
							timeLine="June 2016 - May 2018"
						>
							Development and support of sites in a web studio.
							<br /><br />
							<span class="italic">Tech stack</span>: Js, Bitrix, Laravel, Vue.js, react, css.
						</Company>
					</TimeLineItem>
				</TimeLine>
			</ResumeBlock>

			<ResumeBlock name="Education">
				<Company name={'MSTU "STANKIN"'} position="Information Technology" timeLine="August 2018" />
			</ResumeBlock>

			<ResumeBlock name="Skills">
				<div id="skills" class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<Skills name="Hard skills" items={hardSkills} />
					<Skills name="Soft skills" items={softSkills} />
				</div>
			</ResumeBlock>
		</div>
	</div>
</section>
