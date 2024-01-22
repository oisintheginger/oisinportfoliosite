import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

export default function Experience() {
	return (
		<Box component={"section"} width={"100%"}>
			<Typography variant="h1">Experience</Typography>
			<Stack spacing={4} alignItems={"center"} width={"100%"}>
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
					jobDescription={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue a massa hendrerit feugiat at vitae neque. Integer ac bibendum enim, eu efficitur orci. Nunc quis odio non ante pretium interdum non eu mauris. Quisque faucibus arcu vel ligula porta tincidunt. Morbi ornare magna mi, vehicula bibendum velit dignissim quis. Donec et egestas mi, a rhoncus nibh. Donec vitae volutpat lacus."
					}
					bulletPoints={[
						"Wrote Unit and Integration tests for code coverage.",
						"Used Jenkins + GitHub as part of deployment pipeline, including E2E testing and triaging.",
						"Daily Standups and regular communication with team/other staff to coordinate and diagnose problems.",
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
					jobDescription={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue a massa hendrerit feugiat at vitae neque. Integer ac bibendum enim, eu efficitur orci. Nunc quis odio non ante pretium interdum non eu mauris. Quisque faucibus arcu vel ligula porta tincidunt. Morbi ornare magna mi, vehicula bibendum velit dignissim quis. Donec et egestas mi, a rhoncus nibh. Donec vitae volutpat lacus."
					}
					bulletPoints={[
						"Wrote Unit and Integration tests for code coverage.",
						"Used Jenkins + GitHub as part of deployment pipeline, including E2E testing and triaging.",
						"Daily Standups and regular communication with team/other staff to coordinate and diagnose problems.",
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
					jobDescription={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue a massa hendrerit feugiat at vitae neque. Integer ac bibendum enim, eu efficitur orci. Nunc quis odio non ante pretium interdum non eu mauris. Quisque faucibus arcu vel ligula porta tincidunt. Morbi ornare magna mi, vehicula bibendum velit dignissim quis. Donec et egestas mi, a rhoncus nibh. Donec vitae volutpat lacus."
					}
					bulletPoints={[
						"Wrote Unit and Integration tests for code coverage.",
						"Used Jenkins + GitHub as part of deployment pipeline, including E2E testing and triaging.",
						"Daily Standups and regular communication with team/other staff to coordinate and diagnose problems.",
					]}
				/>
			</Stack>
		</Box>
	);
}
