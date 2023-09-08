import React, { useState } from "react";
import { angles, shadowIcons } from "../cores/importLayers";
import './style.scss';


const Angle = ({setSelectedAngleID
    ,selectedBodyDim3, setSelectedBodyDim3
    ,selectedHandleDim3, setSelectedHandleDim3}
  ) => { 
  
  const [hoveredPart, setHoveredPart] = useState(null);

  const pushBottun = (angleId) => {
    setSelectedAngleID(angleId);
    const tmpBody = [...selectedBodyDim3];
    const tmpHandle = [...selectedHandleDim3];

    tmpBody[0] = angleId;
    tmpHandle[0] = angleId;

    setSelectedBodyDim3(tmpBody);
    setSelectedHandleDim3(tmpHandle);
  };


  const hoverStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  })

  return (
      <body className='containerStyle'>
        {angles.map((angle, index) => (
          <button
            key={angle.id}  // keyを追加することでリアクトのパフォーマンスを最適化
            style={hoverStyle(angle.id)}
            className='buttonStyle'
            onMouseEnter={() => setHoveredPart(angle)}
            onMouseLeave={() => setHoveredPart(null)}
            onClick={() => pushBottun(angle.id)}
          >
            <span>
              <img src={shadowIcons[index]} alt="" />
            </span>
            <span>{angle.MEMO}</span>
          </button>
        ))}

      </body>
  );
}

export default Angle;
