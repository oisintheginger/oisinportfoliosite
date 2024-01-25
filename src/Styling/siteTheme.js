import { createTheme } from "@mui/material";
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
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					projectTitle: "h2",
				},
			},
		},
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

theme.typography.projectTitle = {
	fontSize: "2rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.6rem",
	},
	color: "#E3FAFB",
	fontWeight: 900,
	fontFamily: "Urbanist",
};
theme.typography.projectRole = {
	fontSize: "1.2rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.2rem",
	},
	color: "#E3FAFB",
	fontWeight: 600,
	fontFamily: "Urbanist",
};

theme.typography.experienceRole = {
	fontSize: "2rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
	color: "#E3FAFB",
	fontWeight: 500,
	fontFamily: "Urbanist",
};

theme.typography.experienceDetail = {
	fontSize: "1.1rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.1rem",
	},
	color: "#E3FAFB",
	fontWeight: 200,
	fontFamily: "Urbanist",
};

export default theme;
