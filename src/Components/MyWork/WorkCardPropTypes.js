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
	description: PropTypes.arrayOf(PropTypes.string),
	videoContentURL: PropTypes.arrayOf(PropTypes.string),
	images: PropTypes.arrayOf(
		PropTypes.shape({
			thumbnail: PropTypes.string,
			fullImage: PropTypes.string,
		})
	),
	links: PropTypes.arrayOf(
		PropTypes.shape({ displayName: PropTypes.string, url: PropTypes.string })
	),
	date: PropTypes.string,
};
