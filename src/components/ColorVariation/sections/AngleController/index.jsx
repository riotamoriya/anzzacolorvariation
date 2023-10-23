import React, { useState } from "react";
import { angles, shadowIcons } from "../../cores/importLayers";

import './style.scss';

// Basically this components change the state of displayed angle.
// When changed angle state, each layers must also be changed because layers are defined by angel
const AngleController = ({ setSelectedAngleID
  , selectedBodyDim3, setSelectedBodyDim3
  , selectedHandleDim3, setSelectedHandleDim3 }
) => {

  const [hoveredPart, setHoveredPart] = useState(null);
  const hoverStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  })
  
  const pushBottun = (angleId) => {
    setSelectedAngleID(angleId);
    const tmpBody = [...selectedBodyDim3];
    const tmpHandle = [...selectedHandleDim3];

    tmpBody[0] = angleId;
    tmpHandle[0] = angleId;

    setSelectedBodyDim3(tmpBody);
    setSelectedHandleDim3(tmpHandle);
  };





  return (
    <body className='containerStyle'>
      {angles.map((angle, index) => (
        <button
          key={angle.id} 
          style={hoverStyle(angle.id)}
          className='buttonStyle'
          onMouseEnter={() => setHoveredPart(angle)}
          onMouseLeave={() => setHoveredPart(null)}
          onClick={() => pushBottun(angle.id)}
        >
          <img src={shadowIcons[index]} alt="" />
          <span>{angle.MEMO}</span>
        </button>
      ))}

    </body>
  );
}

export default AngleController;
