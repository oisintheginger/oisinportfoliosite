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

const NavBarButton = styled(Button)({
	color: "white",
	display: "block",
	width: "100px",
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box width={"100vw"}>
				{/* <Box mt={1}>
					<Container>
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
					</Container>
				</Box> */}

				<Box component={"main"}>
					<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Container>
							<Landing />
							<About />
							<MyWork />
							<Experience />
						</Container>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
