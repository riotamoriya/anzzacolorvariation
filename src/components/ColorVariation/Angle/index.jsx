import React, { useState } from "react";

import { angles, shadowIcons } from "../cores/importLayers";


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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // 親要素の高さを埋める
  };

  
  const buttonStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',    // 画像とテキストを垂直に中央揃え
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1rem',
    marginBottom: "3vh",
  });
  
  return (
      <div style={containerStyle}>
        {angles.map((angle, index) => (
          <button
            key={angle.id}  // keyを追加することでリアクトのパフォーマンスを最適化
            style={buttonStyle(angle)}
            onMouseEnter={() => setHoveredPart(angle)}
            onMouseLeave={() => setHoveredPart(null)}
            onClick={() => pushBottun(angle.id)}
          >
            <span>
              <img src={shadowIcons[index]} style={{"height":"3rem"}} alt="" />
            </span>
            <span>{angle.MEMO}</span>
          </button>
        ))}

      </div>
  );
}

export default Angle;
