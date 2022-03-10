import React from "react";
import "./Cursor.css";

const Cursor = () => (
  <svg width={20} height={20} id="map__cursor" className="Cursor">
    <circle className="cursor__inner" cx="10" cy="10" r="5"></circle>
  </svg>
);

export default Cursor;
