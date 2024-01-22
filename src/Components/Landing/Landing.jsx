import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import Headshot from "./Headshot";
import { Circle } from "@mui/icons-material";

export default function Landing() {
	return (
		<>
			<Box
				position={"relative"}
				zIndex={1}
				sx={{
					gridColumnStart: "main-start",
					gridColumnEnd: "content-start",
					gridRowStart: "landing-start",
					gridRowEnd: "landing-end",
				}}
				minHeight={"100svh"}
				display={{ xs: "none", lg: "block" }}
			/>
			<Box
				sx={{
					gridColumnStart: "main-start",
					gridColumnEnd: "main-end",
					gridRowStart: "landing-start",
					gridRowEnd: "landing-end",

					backgroundColor: "#111112",
				}}
				minHeight={"100svh"}
				display={"grid"}
				gridTemplateColumns={"subgrid"}
				gridTemplateRows={{
					xs: "1fr [headline-start] 6fr [headline-end]",
					lg: "1fr [headline-start] 6fr [headline-end highlights-start] 2fr [highlights-end]",
				}}
				rowGap={"1rem"}
				columnGap={"1rem"}
			>
				<Box
					sx={{
						gridColumnStart: "content-start",
						gridColumnEnd: "content-end",
						gridRowStart: "headline-start",
						gridRowEnd: "headline-end",
					}}
					display={"grid"}
					gridTemplateRows={
						"[first-row-start] 2fr [second-row-start] 2fr [third-row-start] 2fr [fourth-row-start] 2fr [fifth-row-start] 2fr [end]"
					}
					rowGap={"1rem"}
					columnGap={"1rem"}
					gridTemplateColumns={
						"[first-col-start] 1fr [second-col-start] 0.6fr[moustache-start] 0.4fr [third-col-start] 1fr [fourth-col-start] 1fr [fifth-col-start] 1fr  [end]"
					}
				>
					<Box
						sx={{
							gridColumnStart: "moustache-start",
							gridColumnEnd: "end",
							gridRowStart: "first-row-start",
							gridRowEnd: "end",
							overflow: "clip",
							borderRadius: "0px 0px 2rem 0px",
						}}
						display={{ xs: "none", lg: "flex" }}
					>
						<Box
							sx={{
								backgroundImage: "url(/MoustacheNotification.svg)",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
							}}
							width={"250px"}
							height={"200px"}
						/>
					</Box>
					<Box
						sx={{
							gridColumnStart: "third-col-start",
							gridColumnEnd: "end",
							gridRowStart: "first-row-start",
							gridRowEnd: "fifth-row-start",
							background: {
								md: "linear-gradient(135deg, rgba(53,168,194,0) 61%, rgba(53,168,194,1) 92%, rgba(53,168,194,1) 100%)",
							},
							overflow: "clip",
							borderRadius: "0px 0px 2rem 0px",
						}}
						position={"relative"}
						zIndex={1}
						width={"100%"}
						height={"100%"}
						display={{ xs: "none", lg: "flex" }}
						flexDirection={"column"}
						alignItems={"flex-end"}
						justifyContent={"flex-end"}
						overflow={"clip"}
					>
						<Box
							sx={{
								backgroundImage: "url(/placeholder-portfolio-headshot.png)",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
							width={"300px"}
							height={"400px"}
						/>
					</Box>
					<Box
						sx={{
							gridColumnStart: "first-col-start",
							gridColumnEnd: "end",
							gridRowStart: "first-row-start",
							gridRowEnd: "third-row-start",
						}}
						display={{ xs: "flex", lg: "none" }}
						flexDirection={"column"}
						alignItems={"center"}
						pb={2}
					>
						<Box
							component={"img"}
							src="/placeholder-portfolio-headshot-small.png"
							height={"200px"}
							width={"200px"}
							borderRadius={"50%"}
							sx={{
								background:
									"linear-gradient(180deg, rgba(53,168,194,0) 40%, rgba(53,168,194,.1) 55%,rgba(53,168,194,.3) 75%, rgba(53,168,194,1) 100%)",
								border: "6px solid black",
								outline: "2px solid lightblue",
							}}
						/>
					</Box>
					<Box
						sx={{
							gridColumnStart: "first-col-start",
							gridColumnEnd: { xs: "end", lg: "fourth-col-start" },
							gridRowStart: { xs: "third-row-start", lg: "third-row-start" },
							gridRowEnd: "end",
						}}
						position={"relative"}
						zIndex={2}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}
					>
						<Typography
							variant="heroTitle"
							// fontWeight={900}
							// fontFamily={'Urbanist'}
							color={"#E3FAFB"}
							textAlign={{ xs: "center", md: "start" }}
						>
							I'm Oisín.
						</Typography>
						<Divider
							orientation="horizontal"
							sx={{ backgroundColor: "lightblue", height: 2 }}
						/>
						<Typography
							variant="body1"
							textAlign={"justify"}
							sx={{ textJustify: "inter-character" }}
						>
							{
								"Master Degree recipient from Technological University Dublin, looking for opportunities to grow as software developer and designer."
							}
						</Typography>
						<Box
							paddingBlockStart={2}
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"flex-start"}
						>
							<Button
								variant="contained"
								sx={{ width: "50%", mr: 1 }}
								href="mailto:oisintfitzpatrick@gmail.com"
							>
								Get in Contact
							</Button>
							<Button
								variant="outlined"
								sx={{ width: "50%" }}
								href="OisinFitzpatrickResume.pdf"
								download={"OisinFitzpatrickResume.pdf"}
							>
								Resumé
							</Button>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						gridColumnStart: "content-start",
						gridColumnEnd: "content-end",
						gridRowStart: "highlights-start",
						gridRowEnd: "highlights-end",
					}}
					display={{ xs: "none", lg: "flex" }}
					flexDirection={"row"}
					alignItems={"center"}
				>
					<Box
						display={"flex"}
						flexDirection={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
						height={"2rem"}
						width={"100%"}
						position={"relative"}
						zIndex={3}
					>
						<Box minWidth={"25%"} maxWidth={"30%"}>
							<Typography textAlign={"center"}>Web Dev</Typography>
						</Box>
						<Divider
							orientation="vertical"
							variant="middle"
							flexItem
							sx={{ backgroundColor: "primary.main" }}
						/>
						<Box minWidth={"25%"} maxWidth={"30%"}>
							<Typography textAlign={"center"}>UX/UI</Typography>
						</Box>
						<Divider
							orientation="vertical"
							variant="middle"
							flexItem
							sx={{ backgroundColor: "primary.main" }}
						/>
						<Box minWidth={"25%"} maxWidth={"30%"}>
							<Typography textAlign={"center"}>Game Design</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
