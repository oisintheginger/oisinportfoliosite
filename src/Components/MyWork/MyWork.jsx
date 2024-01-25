import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CardContainer from "./WorkCard/CardContainer";
import SlideInSection from "../common/SlideInSection/SlideInSection";
import ModalContext from "./ModalContext";
import CloseIcon from "@mui/icons-material/Close";
import SVGTopTriangleDivider from "../common/TriangleDivider/SVGTopTriangleDivider";

export default function MyWork() {
	const [modalOpen, setModalOpen] = useState(false);

	const [modalContent, setModalContent] = useState(null);

	const closeModal = () => {
		setModalOpen(false);
	};

	const openModal = (imageUrl) => {
		setModalOpen(true);
		setModalContent(imageUrl);
	};

	return (
		<ModalContext.Provider value={openModal}>
			<Box
				id="My Work"
				component={"section"}
				sx={{
					gridColumnStart: "main-start",
					gridColumnEnd: "main-end",
					gridRowStart: "my-work-start",
					gridRowEnd: "my-work-end",

					marginBlockStart: 20,

					paddingBlockStart: 5,
				}}
				display={"grid"}
				gridTemplateColumns={"subgrid"}
				gridTemplateRows={
					"[title-start] 50px [overlap-start] auto [title-end content-start] auto [content-end] 50px [overlap-end]"
				}
			>
				<Box
					sx={{
						display: { xs: "none", lg: "block" },
						position: "relative",
						gridColumnStart: "main-start",
						gridColumnEnd: "main-end",
						gridRowStart: "overlap-start",
						gridRowEnd: "overlap-end",
						width: "100%",
						height: "100%",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) rotateZ(2deg)",
							background: "#305659",
							position: "absolute",
							width: "200svw",
							height: "400px",
							gridColumnEnd: "main-end",
							gridRowStart: "overlap-start",
							gridRowEnd: "overlap-end",
							transformOrigin: "center",
							boxShadow:
								"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
						}}
					/>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) rotateZ(0deg)",
							background: "#75b4ba",
							position: "absolute",
							width: "200svw",
							height: "300px",
							gridColumnEnd: "main-end",
							gridRowStart: "overlap-start",
							gridRowEnd: "overlap-end",
							transformOrigin: "center",
							boxShadow:
								"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
						}}
					/>
				</Box>
				<Typography
					variant="h1"
					textAlign={"center"}
					sx={{
						gridColumnStart: "content-start",
						gridColumnEnd: "content-end",
						gridRowStart: "title-start",
						gridRowEnd: "title-end",
						position: "relative",
					}}
					zIndex={5}
					mb={5}
				>
					My Work
				</Typography>

				<Grid
					sx={{
						gridColumnStart: "content-start",
						gridColumnEnd: "content-end",
						gridRowStart: "content-start",
						gridRowEnd: "content-end",
					}}
					container
					rowSpacing={2}
					columnSpacing={2}
					justifyContent={"center"}
				>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<SlideInSection direction={false}>
							<CardContainer
								frontContent={{
									logoSrc: "/images/pressrekord/press-rekord-logo.png",
									backgroundSrc: "/images/pressrekord/press-rekord-banner.png",
									gradient:
										"linear-gradient(0deg, rgba(15, 7, 26, 0.75), rgba(15, 7, 26, 0.75))",
									title: "Press Rekord",
									role: "Gameplay and Systems Programmer",
									skills: ["Unity", "C#", "Game Design"],
								}}
								backContent={{
									description:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget augue a massa hendrerit feugiat at vitae neque. Integer ac bibendum enim, eu efficitur orci. Nunc quis odio non ante pretium interdum non eu mauris. Quisque faucibus arcu vel ligula porta tincidunt. Morbi ornare magna mi, vehicula bibendum velit dignissim quis. Donec et egestas mi, a rhoncus nibh. Donec vitae volutpat lacus.",
									videoContentURL: "https://youtu.be/5bzMmUYta7E",
									images: [
										"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkzNDQucG5n/347x500/Acay31.png",
										"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTkuanBn/347x500/pb%2F5N1.jpg",
										"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTYuanBn/347x500/5sVOSB.jpg",
										"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNjkuanBn/347x500/4IkCdM.jpg",
										"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNjYuanBn/347x500/f6wLzD.jpg",
									],
									links: [
										{
											displayName: "GitHub Repository",
											url: "https://github.com/oisintheginger/PressRekord",
										},
										{
											displayName: "Itch.io Page",
											url: "https://crystal-crunch.itch.io/press-rekord",
										},
									],
								}}
							/>
						</SlideInSection>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<SlideInSection>
							<CardContainer frontContent={{}} backContent={{}} />
						</SlideInSection>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<SlideInSection direction={false}>
							<CardContainer frontContent={{}} backContent={{}} />
						</SlideInSection>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<SlideInSection>
							<CardContainer frontContent={{}} backContent={{}} />
						</SlideInSection>
					</Grid>
				</Grid>
			</Box>
			<Modal open={modalOpen} onClose={closeModal}>
				<Box>
					<IconButton
						onClick={() => {
							closeModal();
						}}
						color="primary"
						size="large"
						sx={{ position: "absolute", right: "2.5%", top: "1%" }}
					>
						<CloseIcon />
					</IconButton>
					<img
						component={"img"}
						width={"900px"}
						height={"auto"}
						style={{
							position: "absolute",
							aspectRatio: 16 / 9,
							background: `url(${modalContent})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							maxWidth: "95svw",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							border: 0,
						}}
					/>
				</Box>
			</Modal>
		</ModalContext.Provider>
	);
}
