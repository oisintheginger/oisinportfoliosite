import React from "react";
import PropTypes from "prop-types";
import "./flip-card-base-transition.css";
import { Box, Button, Typography } from "@mui/material";
import CardSide from "./CardSide";
function CardBase({ children, onClick, imgSrc, gradient }) {
	return (
		<Box
			component={"div"}
			className="card-base"
			sx={{
				height: "100%",
				width: "100%",
				transformStyle: "preserve-3d",
				position: "relative",
			}}
		>
			<CardSide
				className={"card-front"}
				sx={{
					backgroundColor: "black",
					backgroundImage:
						"linear-gradient(0deg, rgba(15, 7, 26, 0.75), rgba(15, 7, 26, 0.75)), url(/images/pressrekord/press-rekord-banner.png)",
					backgroundSize: "120%",
					backgroundPosition: "center",
				}}
			>
				<Box
					component={"img"}
					src="/images/pressrekord/press-rekord-logo.png"
					sx={{ width: "70%", height: "auto" }}
				/>
				<Typography>Front</Typography>

				<Button variant="outlined" color="primary" onClick={onClick}>
					Flip
				</Button>
			</CardSide>
			<CardSide
				className={"card-back"}
				sx={{ overflow: "scroll", transform: "rotateY(180deg)" }}
			>
				<Box sx={{ height: 1000 }}></Box>
			</CardSide>
		</Box>
	);
}

CardBase.propTypes = {
	onClick: PropTypes.func,
	imgSrc: PropTypes.string,
	gradient: PropTypes.string,
};

export default CardBase;
