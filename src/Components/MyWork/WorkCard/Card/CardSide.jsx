import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

function CardSide({ children, className, sx }) {
	return (
		<Box
			component={"div"}
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"flex-start"}
			alignItems={"center"}
			className={className}
			sx={{
				height: "100%",
				width: "100%",
				borderRadius: 2,
				boxSizing: "border-box",
				paddingBlock: 2,
				paddingInline: 2,
				boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
				"-webkit-backface-visibility": "hidden",
				backfaceVisibility: "hidden",
				position: "absolute",
				"*": {
					"-ms-overflow-style": "none",
				},
				"::-webkit-scrollbar": {
					display: "none",
				},
				...sx,
			}}
		>
			{children}
		</Box>
	);
}

CardSide.propTypes = {};

export default CardSide;
