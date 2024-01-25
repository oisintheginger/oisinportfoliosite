import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

import AdbIcon from "@mui/icons-material/Adb";
import {
	Drawer,
	List,
	ListItemButton,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { LogoIconWhite } from "../../Icons/CustomIcons";

const pages = ["About", "My Work", "Experience"];

export default function NavBar() {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNavOpen = () => {
		setNavOpen((prev) => !prev);
	};

	const down = useMediaQuery(useTheme().breakpoints.down("md"));

	const appBarColor = down ? "siteBackground" : "transparent";

	return (
		<Box>
			<AppBar elevation={down ? 3 : 0} color={appBarColor}>
				<Toolbar
					sx={{
						...(down && { minHeight: "32px", height: "32px" }),
						// backgroundColor: "rgba(29, 29, 29, 0.001)",
						// backdropFilter: "blur(0.65px)",
						paddingBlock: 1,
						position: "relative",
					}}
					variant={"dense"}
				>
					<IconButton
						href={"#Landing"}
						sx={{
							display: { xs: "block", md: "none" },
							position: "absolute",
							left: "50%",
							bottom: "50%",
							transform: "translate(-50%, 55%)",
						}}
					>
						<LogoIconWhite
							sx={{
								height: "32px",
								width: "32px",
							}}
						/>
					</IconButton>
					<IconButton
						href={"#Landing"}
						sx={{ display: { xs: "none", md: "block" } }}
					>
						<LogoIconWhite
							sx={{
								height: "32px",
								width: "32px",
								mr: 3,

								cursor: "pointer",
							}}
						/>
					</IconButton>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="open navigation menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={toggleNavOpen}
							color="primary"
						>
							<MenuIcon />
						</IconButton>
					</Box>
					{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: "none",
								md: "flex",
								py: 0,
							},
						}}
					>
						{pages.map((page) => (
							<Button
								href={`#${page}`}
								key={page}
								onClick={() => {
									setNavOpen(false);
								}}
								sx={{
									color: "white",
									display: "block",
								}}
							>
								{page.toUpperCase()}
							</Button>
						))}
					</Box>
				</Toolbar>
				{down && (
					<Drawer
						anchor="left"
						PaperProps={{
							sx: {
								backgroundColor: "siteBackground.main",
								width: { xs: "100vw", sm: "16vw" },
								minWidth: { xs: "100vw", sm: "300px" },
								paddingBlock: 5,
								display: "flex",
								flexDirection: "column",
								position: "relative",
							},
						}}
						open={navOpen}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<IconButton
								onClick={(e) => {
									e.preventDefault();
									setNavOpen(false);
									document
										.getElementById("Landing")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								<LogoIconWhite
									sx={{
										height: "32px",
										width: "32px",

										cursor: "pointer",
									}}
								/>
							</IconButton>
							<List>
								{pages.map((el) => (
									<ListItemButton
										href={el}
										onClick={(e) => {
											e.preventDefault();
											setNavOpen(false);
											document
												.getElementById(el)
												.scrollIntoView({ behavior: "smooth" });
										}}
										sx={{ fontSize: "1.5rem", width: "100%" }}
									>
										<Typography
											variant="button"
											color={"primary"}
											textAlign={"center"}
											width={"100%"}
										>
											{el.toUpperCase()}
										</Typography>
									</ListItemButton>
								))}
							</List>
						</Box>
						<Box
							sx={{
								position: "absolute",
								left: "50%",
								bottom: "10%",
								transform: "translate(-50%, -50%)",
							}}
						>
							<IconButton
								onClick={() => {
									setNavOpen(false);
								}}
								color="primary"
								size="large"
							>
								<CloseIcon />
							</IconButton>
						</Box>
					</Drawer>
				)}
			</AppBar>
		</Box>
	);
}
