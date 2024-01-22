import PropTypes from "prop-types";

export const FrontsideContentType = {
	logoSrc: PropTypes.string,
	title: PropTypes.string,
	role: PropTypes.string,
	skills: PropTypes.arrayOf(PropTypes.string),
	gradient: PropTypes.string,
	backgroundSrc: PropTypes.string,
};

export const BacksideContentType = {
	description: PropTypes.string,
	videoContentURL: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.string),
	links: PropTypes.arrayOf(
		PropTypes.shape({ displayName: PropTypes.string, url: PropTypes.string })
	),
	date: PropTypes.string,
};