import React from "react";
import SubsectionTitle from "../../common/SubsectionTitle/SubsectionTitle";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";
import FadeSection from "../../common/FadeSection/FadeSection";
import SkillChip from "../../common/SkillChip/SkillChip";

function Skill(props) {
	return (
		<Box display={"block"} height={"100%"}>
			<Stack alignItems={"center"} spacing={2}>
				{props.icon}
				<Typography variant="skillTitle" textAlign={"center"}>
					{props.title}
				</Typography>
				{/* <Stack spacing={3}>
					{props.description.map((el) => (
						<Typography variant="body2" textAlign={"center"}>
							{el}
						</Typography>
					))}
				</Stack> */}
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
			<Stack spacing={2} alignItems={"center"}>
				<SubsectionTitle>Skills</SubsectionTitle>
				<FadeSection>
					<Grid
						container
						width={"100%"}
						rowSpacing={8}
						columnSpacing={2}
						justifyContent={"center"}
					>
						<Grid item xs={12} sm={6}>
							<Skill
								title={"Software Engineering"}
								icon={
									<img
										src="/placeholder_icons/software-design-icon.svg"
										alt="Software Engineering Icon"
										width={128}
										height={128}
									/>
								}
								description={[]}
							/>
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
							>
								<Box width={"200px"}>
									<Divider
										sx={{ mt: 1, backgroundColor: "white" }}
										orientation="horizontal"
										variant="middle"
										flexItem
									/>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Skill
								title={"Fullstack Development"}
								icon={
									<img
										src="/placeholder_icons/programming-icon.svg"
										alt="Fullstack Development Icon"
										width={128}
										height={128}
									/>
								}
								description={[]}
							/>
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
							>
								<Box width={"200px"}>
									<Divider
										sx={{ mt: 1, backgroundColor: "white" }}
										orientation="horizontal"
										variant="middle"
										flexItem
									/>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Skill
								title={"Testing / Investigation"}
								icon={
									<img
										src="/placeholder_icons/ux-diagram.svg"
										width={128}
										height={128}
										alt="Testing / Investigation Icon"
									/>
								}
								description={[]}
							/>
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
							>
								<Box width={"200px"}>
									<Divider
										sx={{ mt: 1, backgroundColor: "white" }}
										orientation="horizontal"
										variant="middle"
										flexItem
									/>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Skill
								title={"Delivery"}
								icon={
									<img
										src="/placeholder_icons/deliveryIcon.svg"
										width={128}
										height={128}
										alt="Delivery Icon"
									/>
								}
								description={[]}
							/>
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
							>
								<Box width={"200px"}>
									<Divider
										sx={{ mt: 1, backgroundColor: "white" }}
										orientation="horizontal"
										variant="middle"
										flexItem
									/>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box width={"100%"} display={"flex"} flexDirection={"column"}>
								<Typography variant="skillTitle" textAlign={"center"}>
									{"Other Skills and Technologies"}
								</Typography>
							</Box>
							<Box
								width={"100%"}
								display={"flex"}
								flexDirection={"row"}
								flexWrap={"wrap"}
								alignItems={"center"}
								justifyContent={"center"}
								columnGap={0.5}
								rowGap={0.2}
							>
								{[
									"JavaScript",
									"Java",
									"C#",
									"Python",
									"SQL",
									"React",
									"NodeJS",
									"ExpressJS",
									"MaterialUI",
									"Unity",
									"User Evaluation",
									"Software Design",
									"Software Testing",
									"UML",
									"Git",
									"Jest",
									"Jenkins",
									"Code Review",
									"Jira",
									"Communication",
									"Problem Solving",
								].map((el) => {
									return <SkillChip label={el} flexGrow />;
								})}
							</Box>
							<Box
								display={"flex"}
								flexDirection={"column"}
								alignItems={"center"}
							>
								<Box width={"200px"}>
									<Divider
										sx={{ mt: 1, backgroundColor: "white" }}
										orientation="horizontal"
										variant="middle"
										flexItem
									/>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</FadeSection>
			</Stack>
		</Box>
	);
}
