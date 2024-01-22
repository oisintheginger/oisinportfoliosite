import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardContainer from "./WorkCard/CardContainer";

export default function MyWork() {
	return (
		<Box
			component={"section"}
			sx={{
				gridColumnStart: "inset-margin-start",
				gridColumnEnd: "inset-margin-end",
				gridRowStart: "my-work-start",
			}}
			// display={"flex"}
			// flexDirection={"column"}
			// alignItems={"center"}
			display={"grid"}
			gridTemplateColumns={"subgrid"}
		>
			<Typography
				variant="h1"
				textAlign={"center"}
				sx={{ gridColumnStart: "content-start", gridColumnEnd: "content-end" }}
			>
				My Work
			</Typography>
			<Grid
				sx={{
					gridColumnStart: "content-start",
					gridColumnEnd: "content-end",
				}}
				container
				rowSpacing={6}
				columnSpacing={6}
				justifyContent={"center"}
			>
				<Grid item xs={12} sm={5}>
					<CardContainer
						frontContent={{
							logoSrc: "/images/pressrekord/press-rekord-logo.png",
							backgroundSrc: "/images/pressrekord/press-rekord-banner.png",
							gradient:
								"linear-gradient(0deg, rgba(15, 7, 26, 0.75), rgba(15, 7, 26, 0.75))",
							title: "Press Rekord",
							role: "Gameplay and Systems Programmer",
							skills: ["Unity", "C#", "Game Programmer", "Design"],
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
				</Grid>
				<Grid item xs={12} sm={5}>
					<CardContainer frontContent={{}} backContent={{}} />
				</Grid>
				<Grid item xs={12} sm={5}>
					<CardContainer frontContent={{}} backContent={{}} />
				</Grid>
				<Grid item xs={12} sm={5}>
					<CardContainer frontContent={{}} backContent={{}} />
				</Grid>
			</Grid>
		</Box>
	);
}
