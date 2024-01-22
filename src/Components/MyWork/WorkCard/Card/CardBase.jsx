import React from "react";
import PropTypes from "prop-types";
import "./flip-card-base-transition.css";
import { Box, Button, Chip, Link, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import CardSide from "./CardSide";
import {
	BacksideContentType,
	FrontsideContentType,
} from "../../WorkCardPropTypes";
function CardBase({ onClick, frontContent, backContent }) {
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
					backgroundImage: `${
						frontContent.gradient ? frontContent.gradient + "," : ""
					}url(${frontContent.backgroundSrc})`,
					backgroundSize: "160%",
					backgroundPosition: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Stack alignItems={"center"}>
					<Box
						component={"img"}
						src={frontContent.logoSrc}
						sx={{ width: "70%", height: "auto" }}
					/>
					<Typography>{frontContent.title}</Typography>
					<Typography>{frontContent.role}</Typography>
					<Box
						display={"flex"}
						flexDirection={"row"}
						sx={{ flexWrap: "wrap", width: "50%" }}
					>
						{frontContent.skills?.map((el) => (
							<Chip
								label={el}
								display={"flex"}
								flexGrow
								sx={{
									color: "white",
									backgroundColor: "blue",
									display: "flex",
								}}
							/>
						))}
					</Box>
				</Stack>
				<Button variant="outlined" color="primary" onClick={onClick}>
					Flip
				</Button>
			</CardSide>
			<CardSide
				className={"card-back"}
				sx={{
					overflow: "scroll",
					transform: "rotateY(180deg)",
				}}
			>
				<Stack alignItems={"center"}>
					<Typography>{backContent.date}</Typography>
					<Typography>{backContent.description}</Typography>

					{backContent.links?.map((el) => (
						<Link component={"a"} href={el.url} target="_blank">
							{el?.displayName}
						</Link>
					))}
					{backContent.videoContentURL && (
						<ReactPlayer url={backContent.videoContentURL} width={"80%"} />
					)}
				</Stack>
				<Button variant="outlined" color="primary" onClick={onClick}>
					Flip
				</Button>
			</CardSide>
		</Box>
	);
}

CardBase.propTypes = {
	onClick: PropTypes.func,
	frontContent: PropTypes.shape(FrontsideContentType),
	backContent: PropTypes.shape(BacksideContentType),
};

export default CardBase;
