import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Gallery.css";
import Minimap from "../Minimap/Minimap";
import Image from "../Image/Image";
import { gsap } from 'gsap';

const Gallery = (props) => {
  useEffect(()=>{
    gallery.current.addEventListener('mousewheel', handleScroll, {passive: false})
  }, [])

  const imageElements = [];
  let map;
  const gallery = useRef(null)
  const [currentFull, setCurrentFull] = useState({});

  function moveDot(thumb, e){
    const tRect = thumb.getBoundingClientRect()
    const mRect = map.current.getBoundingClientRect()
    const ratio = tRect.width / mRect.width
    const cursor = document.getElementById("map__cursor")
    gsap.set(cursor, {
      x: ((e.pageX - tRect.x) / ratio) + mRect.x - cursor.clientWidth/2,
      y: ((e.pageY - tRect.y) / ratio) + mRect.y - cursor.clientHeight/2,
      display: "block"
    })
}

  props.images.map(img=>{
    imageElements.push(<Image name={img.name} link={img.link} moveCursor={moveDot} changeFull={changeFull}></Image>)
  })

  function handleScroll(e){
    e.preventDefault();
    e.target.scrollLeft += e.deltaY;
  }

  function changeFull(name, link){
    setCurrentFull({name: name, link: link})
  }

  return (<div className="Gallery" ref={gallery}>
    <Minimap setmap={el => map = el} name={currentFull.name} link={currentFull.link}></Minimap>
    {imageElements}
  </div>)
};

export default Gallery;
