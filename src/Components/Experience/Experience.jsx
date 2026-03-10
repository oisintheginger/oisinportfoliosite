import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import SVGCurveDivider from "../common/SVGCurveDivider/SVGCurveDivider";
import SVGBottomCurveDivider from "../common/SVGCurveDivider/BottomCurveDivider/SVGBottomCurveDivider";

export default function Experience() {
	const theme = useTheme();
	const up = useMediaQuery(theme.breakpoints.up("md"));
	return (
		<Box
			id="Experience"
			component={"section"}
			width={"100%"}
			sx={{
				gridColumnStart: "main-start",
				gridColumnEnd: "main-end",
				gridRowStart: "experience-start",
				gridRowEnd: "experience-end",
				scrollSnapType: "y mandatory",
				marginBlockStart: 20,
				marginBlockEnd: 5,
				paddingBlockStart: 5,
				paddingBlockEnd: 3,
			}}
			display={"grid"}
			gridTemplateColumns={"subgrid"}
			bgcolor={"black"}
			position={"relative"}
		>
			{up && <SVGCurveDivider />}
			<Box
				position={"relative"}
				zIndex={10}
				sx={{
					gridColumnStart: "content-start",
					gridColumnEnd: "content-end",
					color: "white",
				}}
			>
				<Typography
					position={"relative"}
					variant="h1"
					textAlign={"center"}
					sx={{
						marginBlockEnd: 10,
						color: "white",
					}}
				>
					Experience
				</Typography>
				<Stack
					spacing={4}
					alignItems={"center"}
					width={"100%"}
					sx={{
						gridColumnStart: "content-start",
						gridColumnEnd: "content-end",
					}}
				>
					<ExperienceItem
						companyLogo={""}
						companyName={"Microsoft"}
						highlightSkills={[
							"Fullstack Engineer",
							"React",
							".NET (Dotnet)",
							"Azure DevOps",
							"Javascript",
							"Typescript",
							"C#",
							"Telemetry / Monitoring",
							"Continuous Integration / Continuous Delivery",
						]}
						role={"Software Engineer"}
						date={"February 2025 - Current"}
						jobDescription={[
							"As a Software Engineer at Microsoft, I worked across two teams following my start in February 2025. Initially, I was part of a feature crew contributing to the Copilot Prompt Gallery Rocksteady UX upgrade. After a company-wide restructuring, I transitioned to the OMEX team, where I worked on the Microsoft Office Checkout experience for both embedded and web-based scenarios, contributing to new purchase flows for consumer and commercial users.",
							"In this role, I delivered end-to-end full-stack features across Office checkout experiences, working with React (TypeScript), Redux Toolkit, and C# .NET. My work supported both embedded and web purchase journeys, requiring close attention to reliability, performance, and user experience across different customer segments.",
							"I partnered closely with Product Managers and UX Designers to translate complex business and user requirements into production-ready implementations. I took ownership of multiple business-critical features, including the Dunning Protocol launch and market expansion efforts, proactively identifying and unblocking dependencies to ensure delivery milestones were met.",
							"I also implemented new telemetry and monitoring solutions to clearly distinguish between consumer and commercial checkout flows. This work improved observability in production environments and increased operational confidence by enabling clearer insight into system behavior across different purchasing scenarios.",
						]}
						bulletPoints={[
							"Shipped full-stack checkout features (React, TypeScript, C# .NET).",
							"Took initiative to meet delivery milestones",
							"Partnered with PM and UX on production solutions",
							"Improved observability via targeted telemetry",
						]}
					/>
					<ExperienceItem
						companyLogo={""}
						companyName={"Online Application"}
						highlightSkills={[
							"Fullstack Engineer",
							"Vue",
							"Laravel",
							"Inertia",
							"PHP",
							"JavaScript",
							"UX Design",
							"MySQL",
							"Ubuntu",
							"VirtualBox",
						]}
						role={"Software Engineer"}
						date={"April 2024 - January 2025"}
						jobDescription={[
							"As a Full-Stack Software Engineer at Online Application, my primary focus was contributing to the development of a redesigned user interface using Vue.js. The existing platform had been built with Laravel and Blade templates, and the UI modernization project significantly elevated the product by introducing Vue.js as the frontend framework, with Inertia.js enabling seamless communication between the frontend and backend systems.",
							"While I worked across the full stack and regularly developed backend functionality, my strengths were primarily in frontend development and user experience design. This allowed me to take ownership of key interface decisions and contribute meaningfully to the overall usability of the product. I collaborated closely with developers and QA engineers distributed across multiple regions, working together to plan, build, and refine new features while resolving complex issues.",
							"Despite having been with Online Application for a relatively short time, I made meaningful contributions that positively impacted both the product and the development workflow. I remained highly motivated to continue growing in the role, deepen my technical expertise, and expand my contributions as the platform evolved.",
						]}
						bulletPoints={[
							"Frontend Development with JavaScript and Vue.js",
							"Backend Development with PHP and Laravel",
							"UX/UI Design",
							"Development using Ubuntu VM and VirtualBox",
						]}
					/>
					<ExperienceItem
						companyLogo={"/images/hmh/hmh-logo.png"}
						companyName={"Houghton Mifflin Harcourt"}
						highlightSkills={[
							"Frontend Engineer",
							"JavaScript",
							"CSS",
							"Material UI",
							"Code Review",
							"CD/CI Pipelines",
							"Jest",
							"Unit/Integration Testing",
							"GitHub",
							"Outlook",
							"Teams",
						]}
						role={"Frontend Engineer Intern"}
						date={"June 2023 - August 2023"}
						jobDescription={[
							"During the summer of 2023, between semesters of my master's program, I worked as a Frontend Engineering Intern at HMH, contributing to their Ed e-learning platform. I was part of the EnrichEd team—a cross-functional, full-stack group consisting of designers, service engineers, QA engineers, and senior frontend engineers. My primary contribution was a large-scale refactor of the teacher dashboard, reducing the main script size by approximately 35% while also introducing new error and empty states across multiple dashboard widgets.",
							"As part of the internship, I gained hands-on experience writing unit and integration tests, an area that was new to me at the time. I also worked closely with a senior QA engineer, learning best practices around end-to-end testing and developing a deeper appreciation for the role of testing in maintaining product quality and reliability.",
							"I became familiar with the team's CI/CD pipeline and actively supported the deployment process. In my final review, I was commended for my diligence, adherence to engineering standards, and willingness to help ensure smooth releases to production. On several occasions when the pipeline became congested, I proactively collaborated with engineers across teams—coordinating with pull request authors and helping resolve blockers to keep deployments moving.",
							"Overall, the internship provided valuable experience in cross-team collaboration and professional communication within a large engineering organization. I developed stronger development and delivery practices, particularly around code quality, testing, and collaboration, which I carry forward into my work with future teams and employers.",
						]}
						bulletPoints={[
							"Wrote Unit and Integration tests for code coverage.",
							"Used Jenkins + GitHub as part of deployment pipeline, including E2E testing and triaging.",
							"Daily Standups and regular communication with team/other staff to coordinate and diagnose problems.",
						]}
					/>
				</Stack>
			</Box>
			{up && <SVGBottomCurveDivider />}
		</Box>
	);
}
