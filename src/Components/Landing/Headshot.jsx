import React from "react";
import { Box } from "@mui/material";

function Headshot() {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			width={"100%"}
			paddingBlockEnd={10}
		>
			<Box
				height={350}
				width={350}
				maxWidth={"60vw"}
				maxHeight={"60vw"}
				borderRadius={"50%"}
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
				sx={{
					backgroundImage: "url(placeholder-portfolio-headshot.jpg)",
					backgroundSize: "contain",
				}}
				// sx={{ boxShadow: "5px 5px 14px #151515,-5px -5px 14px #252525" }}
				// border={1}
				// borderColor={"lightblue"}
			/>
		</Box>
	);
}

export default Headshot;
