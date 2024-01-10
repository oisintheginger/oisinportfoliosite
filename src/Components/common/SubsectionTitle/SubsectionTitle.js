import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function SubsectionTitle({ children }) {
	return (
		<Box>
			<Typography variant="h2">{children}</Typography>
			<Divider />
		</Box>
	);
}
