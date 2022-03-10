import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Image.css";
import { gsap } from "gsap";

function Image(name, link) {
  const full = useRef(null);
  const thumb = useRef(null);
  const map = useRef(null);
  const [isIn, setIn] = useState(false);
  useEffect(() => {}, []);

  function show(e) {
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 0 }));
    gsap.set(full.current, { opacity: 1 });
    setIn(true)
  }

  function hide(e) {
    const thumbs = document.querySelectorAll(".map__thumb");
    thumbs.forEach((el) => gsap.set(el, { opacity: 1 }));
    gsap.set(full.current, { opacity: 0 });
    setIn(false)
  }
  /**
   * 
   * @param {MouseEvent} e 
   */
  function dotIt(e){
    if(isIn){
      /**
       * sth
       * @type {DOMRect}
       */

      const tRect = thumb.current.getBoundingClientRect()
      const mRect = map.current.getBoundingClientRect()
      const ratio = tRect.width / mRect.width
      const cursor = document.getElementById("map__cursor")
      gsap.set(cursor, {
        x: e.pageX / ratio + mRect.x - tRect.x / ratio - cursor.clientWidth/2,
        y: e.pageY / ratio + mRect.y - tRect.y / ratio - cursor.clientHeight/2
      })
    }
  }

  return (
    <>
      <div
        ref={thumb}
        className="map__thumb"
        style={{ backgroundImage: `url(${link})` }}
        onMouseEnter={show}
        onMouseLeave={hide}
        onMouseMove={dotIt}
      ></div>
      <div
        ref={full}
        src={link}
        alt={name}
        className="map__full"
        style={{ opacity: 0 }}
      >
        <img src={link} alt={name} className="map__image" />
        now i can put some text here
        <div ref={map} className="mmap"></div>
      </div>
    </>
  );
}

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
