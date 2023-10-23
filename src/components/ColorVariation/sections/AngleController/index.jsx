import React, { useCallback } from "react";
import { angles, shadowIcons } from "../../cores/importLayers";

import Button1 from "../../components/Button1";

import './style.scss';

// Basically this components change the state of displayed angle.
// When changed angle state, each layers must also be changed because layers are defined by angel
const AngleController = ({ setSelectedAngleID
  , selectedBodyDim3, setSelectedBodyDim3
  , selectedHandleDim3, setSelectedHandleDim3 }
) => {
  
  const pushBottun = useCallback((angleId) => {
    // change each layers on the axis of angle
    setSelectedHandleDim3([angleId, ...selectedHandleDim3.slice(1)]);
    setSelectedBodyDim3([angleId, ...selectedBodyDim3.slice(1)]);

    // change the state of angle ※ The state of angle is not be functioned actually currently. 
    // However define now because of Understand of state, Extentions for the future.
    setSelectedAngleID(angleId);
  },[selectedHandleDim3, setSelectedAngleID, setSelectedBodyDim3, setSelectedHandleDim3, selectedBodyDim3]);

  return (
    <body className='containerStyle'>
      {angles.map((angle, index) => (
        <Button1
          key={index} 
          onClick={() => pushBottun(angle.id)}
          className='buttonStyle'
        >
          <img src={shadowIcons[index]} alt="" />
          <span>{angle.MEMO}</span>
        </Button1>
      ))}

    </body>
  );
}

export default AngleController;
