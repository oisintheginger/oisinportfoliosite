import { createTheme } from "@mui/material";
import Urbanist from "./fonts/Urbanist-VariableFont_wght.ttf";

const theme = createTheme({
	palette: {
		text: {},
		siteBackground: {
			main: "#1D1D1D",
		},
		primary: {
			main: "#E3FAFB",
		},
		skillChip: {
			main: "#91E0F9",
			contrastText: "#000000",
		},
	},
	typography: {
		fontFamily: ["Urbanist", "sans-serif", "Segoe UI", "system-ui"].join(","),

		h2: {
			color: "#E3FAFB",
		},
		h3: {
			color: "#E3FAFB",
		},
		body1: {
			color: "#E3FAFB",
		},
		heroTitle: {},
	},
});
theme.typography.heroTitle = {
	fontSize: "5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
	color: "#E3FAFB",
};

theme.typography.h1 = {
	fontSize: "5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "3rem",
	},
	color: "#E3FAFB",
	fontWeight: 100,
	fontFamily: "Urbanist",
};

theme.typography.h2 = {
	fontSize: "3rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2.5rem",
	},
	color: "#E3FAFB",
	fontWeight: 400,
	fontFamily: "Urbanist",
};

theme.typography.skillTitle = {
	fontSize: "1.5rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.5rem",
	},
	color: "#E3FAFB",
	fontWeight: 700,
	fontFamily: "Urbanist",
};

theme.typography.body2 = {
	fontSize: "1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem",
	},
	color: "#E3FAFB",
	fontWeight: 300,
	fontFamily: "Urbanist",
};

export default theme;
