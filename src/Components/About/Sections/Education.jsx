import React from "react";
import SubsectionTitle from "../../common/SubsectionTitle/SubsectionTitle";
import { Box, Chip, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import PropTypes from "prop-types";

function Course(props) {
	return (
		<TimelineItem>
			<TimelineOppositeContent>
				<Typography>{props.year}</Typography>
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot sx={{ color: "blue", backgroundColor: "blue" }} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<Box>
					<Typography>{props.course}</Typography>
					<Typography>{props.school}</Typography>
					<Box
						display={"flex"}
						flexDirection={"row"}
						flexWrap={"wrap"}
						justifyContent={props.flipAlignment ? "flex-end" : "flex-start"}
					>
						{props.relevantCoursework.map((el) => (
							<Chip label={el} sx={{ mt: 0.5 }} />
						))}
					</Box>
				</Box>
			</TimelineContent>
		</TimelineItem>
	);
}

Course.propTypes = {
	year: PropTypes.string,
	course: PropTypes.string,
	school: PropTypes.string,
	relevantCoursework: PropTypes.arrayOf(PropTypes.string),
	flipAlignment: PropTypes.bool,
};

export default function Education() {
	return (
		<Box paddingBlockEnd={10}>
			<SubsectionTitle>Education</SubsectionTitle>
			<Box>
				<Timeline position="alternate">
					<Course
						year={"Jan 2024"}
						course={"MSc Advanced Software Development"}
						school={"Technological University Dublin"}
						relevantCoursework={[
							"Software Design",
							"Programming Paradigms",
							"UX Design",
							"Data Visualization",
							"Secure Systems Development",
							"Web Application Architectures",
							"Systems Architectures",
							"Advanced Databases",
						]}
						alignment={"left"}
					/>
					<Course
						year={"May 2022"}
						course={"CPD Fundamentals of Computing"}
						school={"Technological University Dublin"}
						relevantCoursework={[
							"Architecture, Operating Systems & Networks",
							"Systems Analysis",
							"Web and UI Design",
							"Object Oriented Software Development",
							"Information Systems",
						]}
						flipAlignment={true}
					/>
					<Course
						year={"May 2021"}
						course={"BA Game Design"}
						school={"Technological University Dublin"}
						relevantCoursework={[
							"Games Programming",
							"Game Tools",
							"Production",
							"Game Engines",
							"Prototyping",
						]}
					/>
				</Timeline>
			</Box>
		</Box>
	);
}
