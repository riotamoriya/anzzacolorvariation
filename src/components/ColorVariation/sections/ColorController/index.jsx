import React from "react";
import { bodyColors, handleColors } from '../../cores/importLayers';
import Button1 from "../../components/Button1";

import './style.scss';

const ColorController = ({selectedAngleID, selectedPartID, setSelectedColorID
  ,setSelectedBodyDim3, setSelectedHandleDim3}) => {

  const pushBottun = (colorId) => {
    switch(selectedPartID) {
      case 0:
        setSelectedBodyDim3([selectedAngleID,selectedPartID,colorId]);
        break;
      case 1:
        setSelectedHandleDim3([selectedAngleID,selectedPartID,colorId]);
        break;
      default: break;
    };

    setSelectedColorID(colorId);
    // console.log(`RunningPart:= [${selectedAngleID}.${selectedPartID}.${colorId}] = [Angle,Part,Color]`);
  };
  const colorBox = color => ({ backgroundColor: color })
  

  // The logic that select the colors set which involve in Part. (Each Parts has unique colors set.)
  let selectedPartColorsSet;
  switch(selectedPartID) {
    case 0:
      selectedPartColorsSet = bodyColors;
      break;
    case 1:
      selectedPartColorsSet = handleColors;
      break;
    default: break;
  };
  
  return (
    <div className="colorPickerStyle">
      {
        selectedPartColorsSet.map((color)=>{
          return (
            <Button1 className='buttonStyle' onClick={() => pushBottun(color.id)}>
              <span className='colorBoxStyle' style={colorBox(color.HEX)} />
            </Button1>
          )
        })
      }
    </div>
  );
};

export default ColorController;