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
import SkillChip from "../../common/SkillChip/SkillChip";
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
		<Box
			paddingInline={2}
			bgcolor={"#1d1d1d"}
			paddingBlock={3}
			borderRadius={1}
			sx={{
				border: "5px solid black",
				outline: "1px solid lightblue",
			}}
		>
			<Typography
				variant="experienceRole"
				variantMapping={"h2"}
				textAlign={"left"}
				width={"100%"}
			>
				{role}
			</Typography>
			<Grid
				container
				direction={"row"}
				columnGap={1}
				rowGap={{ xs: 1, lg: 2 }}
				justifyContent={"space-between"}
			>
				<Grid item xs={12}>
					<Stack
						direction={{ xs: "column", lg: "row" }}
						spacing={{ xs: 1, lg: 4 }}
						justifyContent={"flex-start"}
						alignItems={{ xs: "left", lg: "flex-end" }}
					>
						<Typography variant="experienceDetail">{companyName}</Typography>
						<Typography variant="experienceDetail">{date}</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={5}>
					<Stack alignItems={"center"}>
						<Box
							maxHeight={"200px"}
							paddingBlock={2}
							sx={{
								overflowY: "scroll",
								maskImage:
									"linear-gradient(180deg, rgba(128,128,128,0) 0%,rgba(128,128,128,1) 10%,rgba(128,128,128,1) 90%, rgba(128,128,128,0) 100%)",
							}}
						>
							{jobDescription?.map((el) => (
								<Typography variant="body1" mb={2} textAlign={"justify"}>
									{el}
								</Typography>
							))}
						</Box>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={5}>
					{bulletPoints && (
						<List sx={{ listStyleType: "disc", paddingInlineStart: 3 }}>
							{bulletPoints.map((el) => (
								<ListItem
									sx={{
										display: "list-item",
										"&::marker": {
											color: "white",
											fontSize: "1.2rem",
											justifyContent: "center",
										},
									}}
								>
									<Typography textAlign={"centre"} variant="body2">
										{el}
									</Typography>
								</ListItem>
							))}
						</List>
					)}
				</Grid>
				<Grid item xs={12}>
					<Box
						display={"flex"}
						flexDirection={"row"}
						flexWrap={"wrap"}
						justifyContent={"center"}
						alignItems={"center"}
						rowGap={0.5}
						columnGap={1}
						padding={2}
						maxHeight={{ xs: "150px", lg: "70px" }}
						max
						sx={{
							overflowY: "scroll",
							maskImage:
								"linear-gradient(180deg, rgba(128,128,128,0) 0%,rgba(128,128,128,1) 10%,rgba(128,128,128,1) 90%, rgba(128,128,128,0) 100%)",
						}}
					>
						{highlightSkills?.map((el) => (
							<SkillChip label={el} />
						))}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

ExperienceItem.propTypes = {
	companyLogo: PropTypes.string,
	companyName: PropTypes.string,
	highlightSkills: PropTypes.arrayOf(PropTypes.string),
	role: PropTypes.string,
	date: PropTypes.string,
	jobDescription: PropTypes.arrayOf(PropTypes.string),
	bulletPoints: PropTypes.arrayOf(PropTypes.string),
};

export default ExperienceItem;
