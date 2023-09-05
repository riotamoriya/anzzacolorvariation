import React from "react";
import { bodyColors, handleColors } from '../cores/importLayers';


const ColorPicker = ({selectedAngleID, selectedPartID, setSelectedColorID
  ,setSelectedBodyDim3, setSelectedHandleDim3}) => {

  const buttonStyle = {
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',          // ボタンの内部をフレックスボックスにする
    flexDirection: 'column', // 要素を縦に配置する
    justifyContent: 'center', // 主軸方向（ここでは縦方向）で要素を中央に配置
    alignItems: 'flex-start', // 交差軸方向（ここでは横方向）で要素を左寄せに設定
    marginBottom: '0.3rem',

  };
    
  const spanStyle = (color) => ({
    display: 'inline-block',
    width: '5vh',
    height: '5vh',
    backgroundColor: color,
  })

  const nameStyle = {
    alignSelf: 'flex-start', // ボタン内での自分自身の配置を左寄せに設定
    fontSize: '0.3rem'
  };

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
    <React.Fragment>
      {
        selectedPartColors.map((color)=>{
          return (
            <div key={color.NAME}>
              <button style={buttonStyle} onClick={() => pushBottun(color.id)}>
                <span style={spanStyle(color.HEX)}></span>
                <span style={nameStyle}>{color.NAME}</span>
              </button>
            </div>
          )
        })
      }
    </React.Fragment>
  );
};

export default ColorPicker;