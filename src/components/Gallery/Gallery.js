import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Gallery.css";
import Minimap from "../Minimap/Minimap";
import Image from "../Image/Image";
import { gsap } from 'gsap';

const Gallery = (props) => {
  const imageElements = [];
  let map;

  const [currentFull, setCurrentFull] = useState({});

  function setMap(el){
    map = el
  }
  function dotIt(thumb, e){
    /**
     * sth
     * @type {DOMRect}
     */

    const tRect = thumb.getBoundingClientRect()
    const mRect = map.current.getBoundingClientRect()
    const ratio = tRect.width / mRect.width
    const cursor = document.getElementById("map__cursor")
    gsap.set(cursor, {
      x: e.pageX / ratio + mRect.x - tRect.x / ratio - cursor.clientWidth/2,
      y: e.pageY / ratio + mRect.y - tRect.y / ratio - cursor.clientHeight/2,
      display: "block"
    })
}

  props.images.map(img=>{
    imageElements.push(<Image name={img.name} link={img.link} moveCursor={dotIt} changeFull={changeFull}></Image>)
  })

  function changeFull(name, link){
    setCurrentFull({name: name, link: link})
  }

  return (<div className="Gallery">
    <Minimap setmap={setMap} name={currentFull.name} link={currentFull.link}></Minimap>
    {imageElements}
  </div>)
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
