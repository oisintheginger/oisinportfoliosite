import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CardContainer from "./WorkCard/CardContainer";
import SlideInSection from "../common/SlideInSection/SlideInSection";
import ModalContext from "./ModalContext";
import CloseIcon from "@mui/icons-material/Close";

export default function MyWork() {
	const [modalOpen, setModalOpen] = useState(false);

	const [modalContent, setModalContent] = useState(null);
	const [modalAlt, setModalAlt] = useState(null);

	const closeModal = () => {
		setModalOpen(false);
	};

	const openModal = (imageUrl, alt) => {
		setModalOpen(true);
		setModalContent(imageUrl);
		setModalAlt(alt);
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
									backgroundSrc: "/images/stockphotos/real-estate-stock.jpg",
									title: "Renting Made Easy",
									role: "Frontend Developer and UX Design",
									logoSrc: "/images/rme/RMELogo.svg",
									gradient:
										"linear-gradient(180deg, rgba(0,89,90,0.8327860685289741) 0%, rgba(4,69,74,0.7179401301536239) 35%, rgba(6,104,106,0.3565955923384979) 100%)",
									skills: [
										"React",
										"Material UI",
										"JavaScript",
										"CSS",
										"UX Design",
										"UX Research",
										"Figma",
										"AWS Amplify",
										"AWS Lambda",
									],
								}}
								backContent={{
									description: [
										"Renting Made Easy is a rental listings website developed for my final project as part of my Master's degree in TUDublin. It was a team project with 5 other students. It was developed over the course of 12 weeks including an extensive evaluation process. It used open-source crime data from OpenBaltimore to provide crime-safety ratings for listings based on their geo-location.",
										"I took the role of Lead Frontend Developer and UX Designer. I created the initial mockups using pen and paper, then proceeded to make simple mockups using Figma. The designs went through multiple stages of user evaluation. I did the initial user evaluations to identify issues with accessibility and layouts, and developed a technique which was later used by my teammate who did subsequent user tests.",
										"Material UI was used throughout this project as it enabled fast-paced development and iteration for designs, and helped support accessibility. My main role was developing the bulk of components for the application, and ensuring they were responsive across multiple devices.",
										"The app was deployed to AWS amplify, and used TanStack (React) Query for communication with a Springboot backend and miscellaneous functions deployed to AWS Lambda. I also wrote and deployed an AWS Lambda function which connected to the Google Map API to return nearby services around a listings location. Tanstack was crucial for this as it provided an efficient caching system that reduced the number of API requests to the Google API, reducing cost.",
									],
									videoContentURL: ["https://youtu.be/bcgjbYrOEZk"],
									links: [
										{
											displayName: "GitHub Repository",
											url: "https://github.com/oisintheginger/mscfinalproject",
										},
										{
											displayName: "Final Report",
											url: "https://onedrive.live.com/?authkey=%21ALhPgsOnoEBy5HQ&id=84CDBF5DEB5865A6%2133376&cid=84CDBF5DEB5865A6&parId=root&parQt=sharedby&o=OneUp",
										},
									],
								}}
							/>
						</SlideInSection>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<SlideInSection>
							<CardContainer
								frontContent={{
									logoSrc: "/images/hmh/HMHEd.svg",
									backgroundSrc: "/images/stockphotos/classroom.jpeg",
									gradient:
										"linear-gradient(0deg, rgba(48,48,0,0.7711614186690301) 0%, rgba(65,63,0,0.6339065167082458) 59%, rgba(150,141,0,0.2977720629267332) 100%)",
									title: "Ed Teacher Dashboard Refactor & New States",
									role: "Intern Frontend Engineer",
									skills: [
										"JavaScript",
										"React",
										"MUI",
										"Jest",
										"CI/CD Pipelines",
										"Code Review",
									],
								}}
								backContent={{
									description: [
										"HMH Ed is an e-learning platform which hosts HMH's curriculum content, and allows teachers and students to manage/complete/mark assignments.",
										"One of their core experiences is the teacher dashboard, which is a Teacher's first stop after logging in to Ed. When I began my internship, new widgets had been added to the teacher dashboard, allowing teachers to get at-a-glance updates on assignments and coursework. This work led to a large bloated application script, for which there was minimal test-coverage.",
										"My major contribution during my internship was refactoring this large script into numerous smaller components and hooks, and adding test coverage to these from which I gained valuable experience in writing Unit and Integration tests.",
										"During this work, I also was tasked with adding new Error states to the widgets, including icons and system alerts. This required me to perform a lot of cross-team (cross-continental!) communication and collaboration, as I needed to work alongside the UX team to source the correct iconography and copy, and accessibility experts to determine the rules for text alerts and window titles.",
										"Both of these were completed over a series of Pull Requests, each getting feedback and approval from other developers/engineers. Each PR had to be fully tested/triaged through the CI/CD pipeline.",
									],
									videoContentURL: ["https://youtu.be/HKA5NM7Way8"],
								}}
							/>
						</SlideInSection>
					</Grid>
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
									description: [
										"Press Rekord was a final year project developed by a team of five final year Game Design Students at TUDublin. It is an action oriented metroid-vania vertical slice. It featured fast-paced combat, NPC interactions and dialogues, and Quest systems. Taking the role of Kat, a thrill-seeking live streamer, the player fights underground monsters, explores the underground environments, and meets unique characters.",
										"For this project, I took on the role of lead programmer, wherein I was responsible for developing the backbone gameplay systems including a custom event system, quest systems, dialogue systems. I also designed and implemented the final boss encounter and the Fly enemy.",
										"Over the course of this project, I gained valuable skills in C# and game design.",
										"Developing the event system was crucial for this project to work, as it enabled multiple sub-systems to communicate while remaining decoupled from each other. For example, for quests involving specific dialogue trees, those dialogues could raise events while the quest instance could listen to those events and respond to them, i.e. progressing the quest to the next stage.",
										"The dialogue system took advantage of the power of serialized objects. Using serialized objects enabled the implementation of branching dialogue trees without adding too much complexity. The key characteristic of scriptable objects that allowed this was their ability to contain references to other scriptable objects.",
									],
									videoContentURL: ["https://youtu.be/5bzMmUYta7E"],
									images: [
										{
											thumbnail:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkzNDQucG5n/347x500/Acay31.png",
											fullImage:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkzNDQucG5n/original/5l7I3X.png",
										},
										{
											thumbnail:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTkuanBn/347x500/pb%2F5N1.jpg",
											fullImage:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTkuanBn/original/Yz5j59.jpg",
										},
										{
											thumbnail:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTYuanBn/347x500/5sVOSB.jpg",
											fullImage:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNTYuanBn/original/Hh3zCN.jpg",
										},
										{
											thumbnail:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNjkuanBn/347x500/4IkCdM.jpg",
											fullImage:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxODMuanBn/original/x0Zpej.jpg",
										},
										{
											thumbnail:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNjYuanBn/347x500/f6wLzD.jpg",
											fullImage:
												"https://img.itch.zone/aW1hZ2UvNzk2MjAwLzU4OTkxNjYuanBn/original/ZPXKth.jpg",
										},
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
							<CardContainer
								frontContent={{
									logoSrc: "/images/face2face/nodejslogo.svg",
									backgroundSrc: "/images/face2face/computerbackground.jpg",
									title: "Face 2 Face Backend API",
									role: "Student Project",
									gradient:
										"linear-gradient(180deg, rgba(18,53,20,0.92522304331889) 0%, rgba(40,57,40,0.6591166007418592) 22%, rgba(14,52,14,0.6311053962600666) 100%)",
									skills: [
										"JavaScript",
										"NodeJS",
										"ExpressJS",
										"MongoDB",
										"NoSQL",
									],
								}}
								backContent={{
									description: [
										"In the first semester of my masters degree, I was required to create a backend API for a web application as part of a module in web application architectures. For this project I used NodeJS, ExpressJS, and MongoDB as the backbone for API.",
										"The project was called Face2Face, which was a rental listings application (e.g. Daft.ie / Immoweb.be). The application featured token-based authentication/authorization, email-based password resetting, and image uploading.",
										"Users were able to upload profile images, and/or able to create new listings with multiple images. There were numerous other CRUD type operations that users could perform. One thing that was unique was the interest registering system, which allowed users to register their interest for the property. Listing owners could then respond to user interests in the app, which would send an email to the interested party's email inbox.",
										"With Express as the routing solution, I was able to configure various middleware that provided functionality to the app including Multer and AWS S3 for file uploading. Multer allowed the project to receive image upload requests, while restricting the filetypes and ensuring they were within a specified size range. This was a crucial part for the 'security' of the website, as in theory, it could prevent malicious actors from uploading gigantic files to crash the server/go over the S3 bucket limits.",
									],
									videoContentURL: ["https://youtu.be/SuNRi2IxhQ4"],
									links: [
										{
											displayName: "GitHub Repository",
											url: "https://github.com/oisintheginger/Face2FacePublicRepo",
										},
									],
								}}
							/>
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
						src={modalContent}
						width={"900px"}
						height={"auto"}
						loading="lazy"
						alt={modalAlt}
						style={{
							position: "absolute",
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
