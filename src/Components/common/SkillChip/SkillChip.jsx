import { Chip } from "@mui/material";

function SkillChip({ label, flexGrow = false, outlined = false }) {
	return (
		<Chip
			label={label}
			sx={{
				mt: 0.5,
				"& .MuiChip-label": {
					fontWeight: 800,
				},
			}}
			color="skillChip"
			flexGrow={flexGrow}
			variant={outlined ? "outlined" : "filled"}
		/>
	);
}

export default SkillChip;
