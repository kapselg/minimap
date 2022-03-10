import React from "react";
import PropTypes from "prop-types";
import "./Gallery.css";

const Gallery = (props) => {
  return <div className="Gallery">{props.images}</div>;
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
