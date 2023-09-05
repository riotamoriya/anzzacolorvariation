import React from "react";

import { layers, ReadInitializeInvisibly } from "../cores/importLayers";


const LayersFlame = ({ selectedBodyDim3, selectedHandleDim3 }) => {
  
  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // 追加
    margin: "auto",
    position: 'relative',
    height: '90%',
    width: '100%',  // 追加
    boxSizing: 'border-box',
  };
  
  const imageStyle = {
    position: 'absolute',
    margin: 'auto',
    maxHeight: "100%",
    width: "auto",
    transform: "none",
  };
  
  return (
    <div style={imageContainerStyle}>
      <ReadInitializeInvisibly />
      <img src={layers[selectedBodyDim3[0]][selectedBodyDim3[1]][selectedBodyDim3[2]]} alt="Body" style={imageStyle} />
      <img src={layers[selectedHandleDim3[0]][selectedHandleDim3[1]][selectedHandleDim3[2]]} alt="Handle" style={imageStyle} />
    </div>
  );
};

export default LayersFlame;


