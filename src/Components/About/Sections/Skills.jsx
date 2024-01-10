import React from "react";
import SubsectionTitle from "../../common/SubsectionTitle/SubsectionTitle";
import { Box, Grid, Icon, Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";

function Skill(props) {
	return (
		<Box display={"block"}>
			<Stack alignItems={"center"}>
				<Typography variant="SkillTitle">{props.title}</Typography>
				{props.icon}
				{props.description.map((el) => (
					<Typography variant="body2">{el}</Typography>
				))}
			</Stack>
		</Box>
	);
}

Skill.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.element,
	description: PropTypes.arrayOf(PropTypes.string),
};

export default function Skills() {
	return (
		<Box paddingBlockEnd={10}>
			<SubsectionTitle>Skills</SubsectionTitle>
			<Grid container width={"100%"} rowSpacing={2} columnSpacing={2}>
				<Grid item xs={12} sm={6}>
					<Skill
						title={"Software Design + Development"}
						icon={
							<img
								src="/placeholder_icons/drafting-compass.svg"
								width={200}
								height={200}
							/>
						}
						description={[
							"I strive to generate well designed/architected code.",
							"I also have extensive experience developing in agile teams.",
						]}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Skill
						title={"Software Design + Development"}
						icon={
							<img
								src="/placeholder_icons/drafting-compass.svg"
								width={200}
								height={200}
							/>
						}
						description={[
							"I strive to generate well designed/architected code.",
							"I also have extensive experience developing in agile teams.",
						]}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Skill
						title={"Software Design + Development"}
						icon={
							<img
								src="/placeholder_icons/drafting-compass.svg"
								width={200}
								height={200}
							/>
						}
						description={[
							"I strive to generate well designed/architected code.",
							"I also have extensive experience developing in agile teams.",
						]}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Skill
						title={"Software Design + Development"}
						icon={
							<img
								src="/placeholder_icons/drafting-compass.svg"
								width={200}
								height={200}
							/>
						}
						description={[
							"I strive to generate well designed/architected code.",
							"I also have extensive experience developing in agile teams.",
						]}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
