import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Image.css";
import { gsap } from "gsap";

const Image = (props) => {
  const thumb = useRef(null);
  const [isShown, setShown] = useState(false);

  function handleClick(e){
    console.log("click");
    if(isShown){
      hide(e)
    }else{
      show(e)
    }
  }

  function show(e){
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 0 }));
    setShown(true)
    props.changeFull(props.name, props.link)
  }

  function hide(e){
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 1 }));
    setShown(false)
    gsap.set(document.getElementById("map__cursor"), {display: "none"})
    props.changeFull({})
  }
  
  function moveCursor(e){
    if(isShown) props.moveCursor(thumb.current, e)
  }

  return (
      <figure
        ref={thumb}
        className="map__thumb"
        style={{ backgroundImage: `url(${props.link})` }}
        onClick={handleClick}
        onMouseMove={moveCursor}
        onMouseLeave={hide}
      ></figure>

  );
}

export default Image;
