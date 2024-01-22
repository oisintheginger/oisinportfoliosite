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
import AdbIcon from "@mui/icons-material/Adb";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
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
						paddingBlockStart: 1,
					}}
					variant={"dense"}
				>
					<LogoIconWhite
						sx={{
							height: "32px",
							width: "32px",
							mr: 3,
							display: { xs: "none", md: "block" },
							cursor: "pointer",
						}}
					/>
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
							color="inherit"
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
								key={page}
								onClick={() => {
									setNavOpen(false);
								}}
								sx={{
									color: "white",
									display: "block",
								}}
							>
								{page}
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
								pt: { xs: "2px", sm: "20px" },
								minWidth: { xs: "100vw", sm: "300px" },
							},
						}}
						open={navOpen}
					></Drawer>
				)}
			</AppBar>
		</Box>
	);
}
