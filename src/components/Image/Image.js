import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Image.css";
import { gsap } from "gsap";

function Image(props) {
  const thumb = useRef(null);
  const [isIn, setIn] = useState(false);


  function show(e) {
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 0 }));
    setIn(true)
    props.changeFull(props.name, props.link)
  }

  function hide(e) {
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 1 }));
    setIn(false)
    gsap.set(document.getElementById("map__cursor"), {display: "none"})
    props.changeFull({})
  }
  /**
   * @param {MouseEvent} e 
   */
  
  function moveCursor(e){
    if(isIn) props.moveCursor(thumb.current, e)
  }
  return (
      <div
        ref={thumb}
        className="map__thumb"
        style={{ backgroundImage: `url(${props.link})` }}
        onMouseEnter={show}
        onMouseLeave={hide}
        onMouseMove={moveCursor}
      ></div>

  );
}

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
