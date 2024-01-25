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
							"Over the summer of 2023, between semesters of my masters program, I was an frontend intern with HMH, working and contributing to their Ed e-learning platform. I was part of the EnrichEd team, a fullstack team of designers, Service engineers, QA engineers, and 2 senior frontend engineers. I contributed to the refactoring of an entire dashboard, reducing lines of code within the main script by 35%, and adding new error and empty states to widgets on the teacher dashboard.",
							"During the internship, I also wrote numerous Unit and Integration tests, which was a new experience for me, and I spent time learning from the senior QA engineer on E2E testing and practices involved in that.",
							"I also became familiar with the CI/CD pipeline, and in the final meeting of the internship, I was praised for my dilligence and adherance to the standard and for helping out with getting deployments through to production. Over multiple instances where the pipeline was getting backed-up/congested, I helped sort out these issues by reaching out to relevant PR authors and by collaborating with my fellow engineers across teams.",
							"Overall, I gained valuable experience for inter/cross team collaboration and communication, and developed better working practices that I will bring forward to new employers.",
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
