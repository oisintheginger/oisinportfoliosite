import logo from "./logo.svg";
import {
	AppBar,
	Container,
	Link,
	Toolbar,
	Typography,
	Stack,
	ThemeProvider,
	Box,
	Button,
	Divider,
	styled,
} from "@mui/material";
import "./App.css";
import theme from "./Styling/siteTheme";
import Landing from "./Components/Landing/Landing";
import MyWork from "./Components/MyWork/MyWork";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import { LinkedInIcon } from "./Icons/CustomIcons";
const NavBarButton = styled(Button)({
	color: "white",
	display: "block",
	width: "100px",
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Box
				display={"grid"}
				gridTemplateColumns={{
					xs: "[main-start] 0.05fr [inset-margin-start content-start] 0.5fr [center-line] 0.5fr [content-end inset-margin-end]  0.05fr [main-end]",
					md: "[main-start] .2fr [inset-margin-start] .8fr [content-start] 1.3fr [center-line] 1.3fr [content-end]  .8fr [inset-margin-end] .2fr[main-end]",
				}}
				gridTemplateRows={{
					xs: "[landing-start] auto [landing-end about-start] auto [about-end my-work-start] auto [my-work-end experience-start] auto [experience-end]",
					md: "[landing-start] 100svh [landing-end about-start] auto [about-end my-work-start] auto [my-work-end experience-start] auto [experience-end]",
				}}
				overflow={"clip"}
			>
				<Landing />
				<About />
				<MyWork />
				<Experience />
			</Box>
			<Stack
				display={"flex"}
				direction={"column"}
				spacing={2}
				alignItems={"center"}
				justifyContent={"flex-start"}
				width={"100%"}
				height={"10svh"}
				mb={5}
			>
				<Stack direction={"row"} justifyContent={"center"} spacing={3}>
					<Box
						component={"a"}
						target="_blank"
						href={"https://www.linkedin.com/in/oisin-fitzpatrick/"}
						sx={{
							background: 'url("./linkedInIcon.svg")',
							backgroundSize: "contain",
							cursor: "pointer",
						}}
						width={"2rem"}
						height={"2rem"}
					/>
					<Box
						component={"a"}
						target="_blank"
						href={"https://github.com/oisintheginger"}
						sx={{
							background: 'url("./githubIcon.svg")',
							backgroundSize: "contain",
							cursor: "pointer",
						}}
						width={"2rem"}
						height={"2rem"}
					/>
				</Stack>
				<Typography>Built with React and MUI</Typography>
				<Typography>&copy; Oisín Fitzpatrick 2024</Typography>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
