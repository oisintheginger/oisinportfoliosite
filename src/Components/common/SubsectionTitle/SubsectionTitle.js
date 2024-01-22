import { Circle } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function SubsectionTitle({ children }) {
	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
			<Typography variant="h2" textAlign={"center"}>
				{children}
			</Typography>
			<Box width={"300px"} maxWidth={"80svw"}>
				<Divider sx={{ backgroundColor: "primary.main" }} flexItem />
			</Box>
			{/* <Circle fontSize="small" /> */}
		</Box>
	);
}
