import React, { useState } from "react";

import { parts as pb_parts, icons as pb_icons} from "../core/partsSelectButton.js";

const PartSelections = ({ setSelectedPartsType }) => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const controllerStyle = {
    display: 'flex',      // フレックスコンテナとして設定
    flexWrap: 'nowrap',   // 子要素を折り返さない
    position: 'absolute', 
    top: '50%',           
    left: '50%',          
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',  
};


  const imgStyle = {
      width: '3rem',
      height: '3rem'
  };

  const buttonStyle = part => ({
      marginRight: '2rem',
      marginLeft: '2rem',
      background: hoveredPart === part ? '#eee' : 'none', // カーソルが乗っているときは背景色をgrayに
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '1rem'
      
  });

  return (
      <div style={controllerStyle}>
          {pb_parts.map(part => (
              <button
                  style={buttonStyle(part)}
                  key={part}
                  onMouseEnter={() => setHoveredPart(part)} // カーソルがボタンに乗ったときのハンドラ
                  onMouseLeave={() => setHoveredPart(null)} // カーソルがボタンから離れたときのハンドラ
                  onClick={() => setSelectedPartsType(part)}
              >
                  <img style={imgStyle} src={pb_icons[part]} alt={`Icon for ${part}`} />
                  <span>{part}</span>
              </button>
          ))}
      </div>
  );
}

export default PartSelections;
