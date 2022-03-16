import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Gallery.css";
import Minimap from "../Minimap/Minimap";
import Image from "../Image/Image";
import { gsap } from 'gsap';
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Gallery = (props) => {
  useEffect(()=>{
    gallery = document.querySelector('.Gallery');
    inner = document.querySelector('.Gallery-inner');
    centerPx = window.visualViewport.height / 2 - inner.clientHeight / 2;
    gsap.set(gallery, {height: inner.clientWidth - window.visualViewport.height})

    scroll();
  }, [])

  const imageElements = [];
  let map, inner, gallery, centerPx;
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

  function isInMiddle(){
    return gallery.getBoundingClientRect().top <= 0 && gallery.getBoundingClientRect().bottom > window.visualViewport.height
  }

  function isAtTheTop(){
    console.log(gallery.getBoundingClientRect().top);
    console.log(gallery.getBoundingClientRect().top > 0 );
    return gallery.getBoundingClientRect().top > 0 
  }

  function scroll(){
    if(isInMiddle()){
      // console.log("in middle");
      // current = parseFloat(delay(current, next, .5)).toFixed(2)
      // next = window.scrollY - startingY;
      gsap.set(inner, {position: 'fixed', top: `calc(50vh - ${inner.clientHeight / 2}px)`, bottom: "auto", transform: `translateX(${gallery.getBoundingClientRect().top}px)`});
    }else{
        if(isAtTheTop()){
          gsap.set(inner, {position: "absolute", bottom: "auto", top: centerPx}) 
        }else{
          gsap.set(inner, {position: "absolute", top: "auto", bottom: centerPx}) 
        }
    }
    requestAnimationFrame(scroll)
  }

  function changeFull(name, link){
    setCurrentFull({name: name, link: link})
  }

  return (<div className="Gallery" ref={gallery}>
    <Minimap setmap={el => map = el} name={currentFull.name} link={currentFull.link}></Minimap>
    <div className="Gallery-inner" ref={inner}>{imageElements}</div> 
  </div>)
};

export default Gallery;
