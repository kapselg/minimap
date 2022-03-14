import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './Minimap.css';


const Minimap = (props) => {
  const full = useRef(null);
  const map = useRef(null);
  props.setmap(map)
  return(
    <div
        ref={full}
        className="map__full"
        style={{ opacity: props.link ? 1 : 0}}
      >
        <img src={props.link} alt={props.name} className="map__image" />
        now i can put some text here
        <div ref={map} className="mmap"></div>
      </div>
  )
};

export default Minimap;
