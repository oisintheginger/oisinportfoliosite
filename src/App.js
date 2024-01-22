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
const NavBarButton = styled(Button)({
	color: "white",
	display: "block",
	width: "100px",
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			{/* <NavBar /> */}
			{/* <Box mt={1}>
					<Stack
						direction={"row"}
						width={"100%"}
						justifyContent={"center"}
						spacing={10}
					>
						<NavBarButton>About</NavBarButton>
						<Divider
							orientation="vertical"
							flexItem
							sx={{
								color: "white",
								bgcolor: "white",
							}}
						/>
						<NavBarButton>My Work</NavBarButton>
						<Divider
							orientation="vertical"
							flexItem
							sx={{ color: "white", bgcolor: "white" }}
						/>
						<NavBarButton>Experience</NavBarButton>
					</Stack>
				</Box> */}

			<Box
				display={"grid"}
				gridTemplateColumns={{
					xs: "[main-start] 0.05fr [inset-margin-start content-start] 0.5fr [center-line] 0.5fr [content-end inset-margin-end]  0.05fr [main-end]",
					md: "[main-start] .2fr [inset-margin-start] .8fr [content-start] 1.3fr [center-line] 1.3fr [content-end]  .8fr [inset-margin-end] .2fr[main-end]",
				}}
				gridTemplateRows={{
					xs: "[landing-start] auto [landing-end about-start] auto [about-end my-work-start] auto ",
					md: "[landing-start] 100svh [landing-end about-start] auto [about-end my-work-start] auto ",
				}}
				gridAutoRows={"auto"}
				overflow={"clip"}
			>
				<Landing />

				<About />
				<MyWork />
				{/* <Experience /> */}
			</Box>
		</ThemeProvider>
	);
}

export default App;
