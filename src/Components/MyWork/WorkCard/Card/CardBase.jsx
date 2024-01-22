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
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Box
					height={"100%"}
					width={"100%"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					alignItems={"center"}
					// gridTemplateColumns={
					// 	"[start] .2fr [button-left] .6fr [button-right] .2fr [end]"
					// }
					// gridTemplateRows={
					// 	"[banner-start] 2fr [banner-end content-start] 1fr [content-end button-start] 0.2fr [button-end] "
					// }
					// gridAutoColumns={"none"}
					// gridAutoRows={"none"}
				>
					<Box
						src={frontContent.logoSrc}
						sx={{
							width: "100%",
							height: "30%",
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundImage: `url(${frontContent.logoSrc})`,
							backgroundPosition: "center",
							display: { xs: "none", sm: "block" },
						}}
					/>
					<Box
						sx={{ width: "100%" }}
						flexGrow={2}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
					>
						<Typography variant="projectTitle" align="center">
							{frontContent.title}
						</Typography>
						<Typography textAlign={"center"} align="center">
							{frontContent.role}
						</Typography>
					</Box>
					<Box
						sx={{ width: "100%", height: "30%" }}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Box
							maxWidth={"50%"}
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"center"}
							sx={{
								flexWrap: "wrap",
								overflowY: "scroll",
								paddingBlock: 2,
								rowGap: 1,
								columnGap: 1,
								maskImage:
									"linear-gradient(180deg, rgba(128,128,128,0) 0%,rgba(128,128,128,1) 10%,rgba(128,128,128,1) 90%, rgba(128,128,128,0) 100%)",
							}}
						>
							{frontContent.skills?.map((el) => (
								<Chip
									label={el}
									flexGrow
									sx={{
										mt: 0.5,
										"& .MuiChip-label": {
											fontWeight: 800,
										},
									}}
									color="skillChip"
								/>
							))}
						</Box>
					</Box>

					<Box
						sx={{
							height: "20%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "flex-end",
						}}
						flexGrow={1}
					>
						<Button variant="outlined" color="primary" onClick={onClick}>
							Flip
						</Button>
					</Box>
				</Box>
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
