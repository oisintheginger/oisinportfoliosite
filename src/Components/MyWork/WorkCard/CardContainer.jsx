import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";

import "./CardContainer.css";
import CardBase from "./Card/CardBase";

function CardContainer({ children }) {
	const [flip, setFlip] = useState(true);
	return (
		<Box
			component={"div"}
			className="flip-card-container"
			sx={{ height: "400px", width: "100%" }}
		>
			<CSSTransition in={flip} timeout={800} classNames={"flip"}>
				<CardBase
					onClick={() => {
						setFlip((prev) => !prev);
					}}
					imgSrc={""}
					gradient={""}
				/>
			</CSSTransition>
		</Box>
	);
}

CardContainer.propTypes = {};

export default CardContainer;
