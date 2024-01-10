import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Landing() {
	return (
		<Box>
			<img src="placeholder-portfolio-headshot.jpg"></img>
			<Typography>Oisin</Typography>
			<Typography>Fitzpatrick</Typography>
			<Typography>Frontend Engineer</Typography>
			<Typography>User Experience</Typography>
			<Typography>Game Design</Typography>
			<Divider />
			<Typography variant="body1">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit
				risus, lacinia in egestas pulvinar, feugiat nec ipsum. Cras sit amet
				nibh turpis. Etiam vitae placerat tellus. Aenean eu lacinia libero.
				Pellentesque vestibulum suscipit turpis, pellentesque semper nisl porta
				a. Proin at libero sed augue ullamcorper convallis nec eget mi. In
				laoreet malesuada ornare. Cras egestas nisl nec magna interdum, at
				congue ex venenatis. Quisque luctus pulvinar purus, eu iaculis tellus
				auctor non.
			</Typography>
		</Box>
	);
}
