import React from "react";
import PropTypes from "prop-types";
import {
	Grid,
	Box,
	Stack,
	Typography,
	Chip,
	List,
	ListItem,
} from "@mui/material";
function ExperienceItem({
	companyLogo,
	companyName,
	highlightSkills,
	role,
	date,
	jobDescription,
	bulletPoints,
}) {
	return (
		<Grid container direction={"row-reverse"} width={"90%"}>
			<Grid xs={12} sm={5}>
				<Stack alignItems={"center"} spacing={1}>
					<img src={companyLogo} width={"240px"} height={"auto"} />
					<Typography>{companyName}</Typography>
					<Box
						display={"flex"}
						flexDirection={"row-reverse"}
						flexWrap={"wrap"}
						justifyContent={"center"}
						rowGap={0.5}
						padding={2}
					>
						{highlightSkills?.slice(0, 5).map((el) => (
							<Chip label={el} />
						))}
					</Box>
				</Stack>
			</Grid>
			<Grid xs={12} sm={7}>
				<Stack alignItems={"center"}>
					<Typography>{role}</Typography>
					<Typography>{date}</Typography>
					<Typography>{jobDescription}</Typography>
					{bulletPoints && (
						<List sx={{ listStyleType: "disc", paddingInlineStart: 3 }}>
							{bulletPoints.map((el) => (
								<ListItem sx={{ display: "list-item" }}>
									<Typography>{el}</Typography>
								</ListItem>
							))}
						</List>
					)}
				</Stack>
			</Grid>
		</Grid>
	);
}

ExperienceItem.propTypes = {
	companyLogo: PropTypes.string,
	companyName: PropTypes.string,
	highlightSkills: PropTypes.arrayOf(PropTypes.string),
	role: PropTypes.string,
	date: PropTypes.string,
	jobDescription: PropTypes.string,
	bulletPoints: PropTypes.arrayOf(PropTypes.string),
};

export default ExperienceItem;
