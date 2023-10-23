import React, { useState } from "react";

import { bodyColors, handleColors } from '../../cores/importLayers';
import './style.scss';


const ColorController = ({selectedAngleID, selectedPartID, setSelectedColorID
  ,setSelectedBodyDim3, setSelectedHandleDim3}) => {

  const [hoveredPart, setHoveredPart] = useState(null);

  const hoverStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  })
  
  const colorBox = color => ({ backgroundColor: color })

  const pushBottun = (colorId) => {
    setSelectedColorID(colorId);

    switch(selectedPartID) {
      case 0:
        setSelectedBodyDim3([selectedAngleID,selectedPartID,colorId]);
        break;
      case 1:
        setSelectedHandleDim3([selectedAngleID,selectedPartID,colorId]);
        break;
      default:
        break;
    };

    console.log(`RunningPart:= [${selectedAngleID}.${selectedPartID}.${colorId}] = [Angle,Part,Color]`);
  };


  let selectedPartColors;
  switch(selectedPartID) {
    case 0:
      selectedPartColors = bodyColors;
      break;
    case 1:
      selectedPartColors = handleColors;
      break;
    default:
      break;
  };
  
  return (
    <div className="colorPickerStyle">
      {
        selectedPartColors.map((color)=>{
          return (
            <button key={color.NAME} style={hoverStyle(color.id)} className='buttonStyle' 
              onClick={() => pushBottun(color.id)}
              onMouseEnter={() => setHoveredPart(color.id)}
              onMouseLeave={() => setHoveredPart(null)} // カーソルがボタンから離れたときのハンドラ
              >
              <span className='colorBoxStyle' style={colorBox(color.HEX)}></span>
            </button>
          )
        })
      }
    </div>
  );
};

export default ColorController;