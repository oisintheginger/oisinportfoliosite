import { Box } from "@mui/material";
// import "./SlideInSection.css";
export default function SlideInSection({ children, direction = true }) {
	return (
		<Box
			className="slideIn"
			sx={{ "--displacement": `${direction ? "30svh" : "-30svh"}` }}
		>
			{children}
		</Box>
	);
}
