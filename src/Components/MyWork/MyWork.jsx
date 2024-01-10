import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WorkCard from "./WorkCard/CardContainer";

export default function MyWork() {
	return (
		<Box component={"section"}>
			<Typography variant="h1">My Work</Typography>
			<Box>
				<Grid
					container
					rowSpacing={6}
					columnSpacing={6}
					justifyContent={"center"}
				>
					<Grid item xs={12} sm={6} p={1}>
						<WorkCard />
					</Grid>
					<Grid item xs={12} sm={6} p={1}>
						<WorkCard />
					</Grid>
					<Grid item xs={12} sm={6} p={1}>
						<WorkCard />
					</Grid>
					<Grid item xs={12} sm={6} p={1}>
						<WorkCard />
					</Grid>
					<Grid item xs={12} sm={6} p={1}>
						<WorkCard />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
