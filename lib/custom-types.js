import PropTypes from "prop-types";

export const SearchResults = PropTypes.shape({
  thumbnail: PropTypes.string.isRequired,
  full: PropTypes.string.isRequired
});
