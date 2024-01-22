import { Box, Typography } from "@mui/material";
import React from "react";
import SubsectionTitle from "../common/SubsectionTitle/SubsectionTitle";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";
import FadeSection from "../common/FadeSection/FadeSection";

export default function About() {
	return (
		<Box
			sx={{
				gridColumnStart: "main-start",
				gridColumnEnd: "main-end",
				gridRowStart: "about-start",
				gridColumnEnd: "about-end",
				scrollSnapType: "y mandatory",
				borderRadius: { lg: "0px 0px 50svw 50svw" },
			}}
			display={"grid"}
			gridTemplateColumns={"subgrid"}
			bgcolor={"black"}
		>
			<Box
				marginBlockStart={"6rem"}
				marginBlockEnd={"3rem"}
				sx={{ gridColumnStart: "main-start", gridColumnEnd: "main-end" }}
				width={"100%"}
			>
				<Typography variant="h1" textAlign={"center"}>
					About
				</Typography>
			</Box>
			<Box
				sx={{
					gridColumnStart: "content-start",
					gridColumnEnd: "content-end",
					minHeight: "100svh",
				}}
			>
				<Box
					sx={{
						minHeight: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Skills />
				</Box>
			</Box>
			<Box
				sx={{
					gridColumnStart: "inset-margin-start",
					gridColumnEnd: "inset-margin-end",
					borderRadius: ".5rem",
					minHeight: "100svh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minHeight: "100%",
					}}
				>
					<Education />
				</Box>
			</Box>
		</Box>
	);
}
