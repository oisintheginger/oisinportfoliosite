import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./flip-card-base-transition.css";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import CardSide from "./CardSide";
import {
	BacksideContentType,
	FrontsideContentType,
} from "../../WorkCardPropTypes";
import SkillChip from "../../../common/SkillChip/SkillChip";
import ModalContext from "../../ModalContext";
function CardBase({ onClick, frontContent, backContent }) {
	const openModal = useContext(ModalContext);
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
							height: "25%",
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
						<Typography
							variant="projectRole"
							textAlign={"center"}
							align="center"
						>
							{frontContent.role}
						</Typography>
					</Box>
					<Box
						sx={{ width: "100%", height: { xs: "30%", lg: "40%" } }}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Box
							maxWidth={"80%"}
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"center"}
							sx={{
								flexWrap: "wrap",
								overflowY: "scroll",
								paddingBlock: 2,
								rowGap: 1.25,
								columnGap: 1,
								maskImage:
									"linear-gradient(180deg, rgba(128,128,128,0) 0%,rgba(128,128,128,1) 10%,rgba(128,128,128,1) 90%, rgba(128,128,128,0) 100%)",
							}}
						>
							{frontContent.skills?.map((el) => (
								<SkillChip label={el} flexGrow />
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
							Open Project
						</Button>
					</Box>
				</Box>
			</CardSide>
			<CardSide
				className={"card-back"}
				sx={{
					transform: "rotateY(180deg)",
					background: "#111112",
				}}
			>
				<Box
					width={"100%"}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"center"}
					sx={{
						maskImage:
							"linear-gradient(180deg, rgba(128,128,128,0) 0%,rgba(128,128,128,1) 5%,rgba(128,128,128,1) 95%, rgba(128,128,128,0) 100%)",

						overflow: "scroll",
						paddingBlock: 1,
					}}
				>
					{backContent.description?.map((el) => (
						<Typography textAlign={"left"} mt={0.5} mb={0.5}>
							{el}
						</Typography>
					))}

					{backContent.videoContentURL &&
						backContent.videoContentURL?.map((el) => (
							<Box sx={{ width: "95%", aspectRatio: 16 / 9 }} mt={4} mb={3}>
								<ReactPlayer url={el} height={"100%"} width={"100%"} />
							</Box>
						))}

					<Stack alignItems={"center"} width={"100%"} mb={3} spacing={2}>
						{backContent.images?.map((el) => (
							<img
								loading="lazy"
								width={"95%"}
								height={"auto"}
								// eslint-disable-next-line
								alt={"Project Image"}
								style={{
									aspectRatio: 16 / 9,
									background: `url(${el})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
								}}
								onClick={() => {
									console.log(el);
									openModal(el);
								}}
							/>
						))}
					</Stack>

					<Stack alignItems={"center"} width={"100%"} mb={3} spacing={2}>
						{backContent.links?.map((el) => (
							<Link component={"a"} href={el.url} target="_blank">
								{el?.displayName}
							</Link>
						))}
					</Stack>
					<Button
						variant="outlined"
						color="primary"
						onClick={onClick}
						sx={{ mb: 2 }}
					>
						CLose Project
					</Button>
				</Box>
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
