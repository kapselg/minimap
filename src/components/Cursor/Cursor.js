import React from "react";
import "./Cursor.css";

const Cursor = () => (
  <svg width={20} height={20} id="map__cursor" className="Cursor" color="white">
    <circle className="cursor__dot" cx="10" cy="10" r="5" color="white"></circle>
  </svg>
);

export default Cursor;