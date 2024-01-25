import { Box, Typography } from "@mui/material";
import Skills from "./Sections/Skills";
import Education from "./Sections/Education";

export default function About() {
	return (
		<Box
			id={"About"}
			sx={{
				gridColumnStart: "main-start",
				gridColumnEnd: "main-end",
				gridRowStart: "about-start",
				gridColumnEnd: "about-end",
				scrollSnapType: "y mandatory",
				// borderRadius: { lg: "0px 0px 50svw 50svw" },
			}}
			display={"grid"}
			gridTemplateColumns={"subgrid"}
			bgcolor={"black"}
		>
			<Box
				marginBlockStart={"3rem"}
				marginBlockEnd={"3rem"}
				sx={{ gridColumnStart: "main-start", gridColumnEnd: "main-end" }}
				width={"100%"}
			>
				<Typography variant="h1" textAlign={"center"}>
					About
				</Typography>
			</Box>
			<Box
				sx={{
					gridColumnStart: "content-start",
					gridColumnEnd: "content-end",
					minHeight: "min-content",
				}}
			>
				<Box
					sx={{
						minHeight: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Skills />
				</Box>
			</Box>
			<Box
				sx={{
					gridColumnStart: "inset-margin-start",
					gridColumnEnd: "inset-margin-end",
					borderRadius: ".5rem",
					minHeight: "100svh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						minHeight: "100%",
					}}
				>
					<Education />
				</Box>
			</Box>
			<Box
				sx={{
					gridColumnStart: "main-start",
					gridColumnEnd: "main-end",
					background: "url(/oisintheginger.github.io/about-divider-wave.svg)",
					width: "100%",
					height: "100px",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			/>
		</Box>
	);
}
