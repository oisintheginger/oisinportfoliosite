import { Box, Typography } from "@mui/material";
import React from "react";
import SubsectionTitle from "../common/SubsectionTitle/SubsectionTitle";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";

export default function About() {
	return (
		<Box component={"section"}>
			<Typography variant="h1">About</Typography>
			<Skills />
			<Education />
		</Box>
	);
}
