import React, { useState } from "react";
// import "./NavBar.css";
import { Box, Link, Typography } from "@mui/material";

function NavBar() {
	const [clicked, setClicked] = useState(true);

	return (
		<Box position={"sticky"} top={0}>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				position={"relative"}
			>
				<nav className="navContainer">
					<div
						className="navMenuButton"
						onClick={() => {
							console.log("clicked");
							setClicked((prev) => setClicked(!prev));
						}}
					>
						<img className="navLogoImage" src="LogoVector.svg" />
					</div>
					<div className={`navOptionsContainer`}>
						<div
							className={`navOptionContainer ${
								clicked ? "containerActive" : ""
							} firstOption`}
						>
							<div className="navOption active">
								<a className="navOptionText">About</a>
							</div>
						</div>
						<div
							className={`navOptionContainer ${
								clicked ? "containerActive" : ""
							} secondOption`}
						>
							<div className="navOption active">
								<a className="navOptionText">My Work</a>
							</div>
						</div>
						<div
							className={`navOptionContainer ${
								clicked ? "containerActive" : ""
							} thirdOption`}
						>
							<div className="navOption active">
								<a className="navOptionText">Experience</a>
							</div>
						</div>
						{/* <div className="navOption">
					<a className="navOptionText">My Work</a>
				</div> */}
						{/* <div className="navOption">
					<a className="navOptionText">Experience</a>
				</div> */}
					</div>
				</nav>
			</Box>
		</Box>
	);

	// return (
	// 	<nav
	// 		className={`appBar ${clicked ? "active" : ""}`}
	// 		onClick={() => {
	// 			setClicked(true);
	// 		}}
	// 	>
	// 		<img
	// 			className="appBarIcon"
	// 			src="/LogoVector.svg"
	// 			width={"32px"}
	// 			height={"32px"}
	// 			color="black"
	// 		/>
	// 		<div className={`navOptions`}>
	// 			<Link className="navOption">
	// 				<Typography>About</Typography>
	// 			</Link>
	// 			<Link className="navOption">
	// 				<Typography>My Work</Typography>
	// 			</Link>
	// 			<Link className="navOption">
	// 				<Typography>Experience</Typography>
	// 			</Link>
	// 		</div>
	// 	</nav>
	// );
}
