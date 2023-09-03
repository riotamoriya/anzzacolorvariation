import React, { useState } from "react";

import bodyIcon from "./icon/body.webp";
import handleIcon from "./icon/handle.webp";

const parts = 
[
  {"id": 0, "Object":bodyIcon,"NAME":"Body","MEMO":""},
  {"id": 1, "Object":handleIcon,"NAME":"Handle","MEMO":""},
];

const PartSelections = ({ setSelectedPartsID }) => {
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
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const buttonStyle = part => ({
    width: '30%',      // 画像のサイズをここで設定
    height: '30%',     // 画像のサイズをここで設定
    marginRight: '20%',
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',    // 画像とテキストを垂直に中央揃え
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
      <div style={controllerStyle}>
          {parts.map(part => {
            return (
              <button
                  style={buttonStyle(part.Object)}
                  key={part.NAME}
                  onMouseEnter={() => setHoveredPart(part.Object)} // カーソルがボタンに乗ったときのハンドラ
                  onMouseLeave={() => setHoveredPart(null)} // カーソルがボタンから離れたときのハンドラ
                  onClick={() => {setSelectedPartsID(part.id);}}
              >
                  <img style={imgStyle} src={part.Object} alt={`Icon for ${part.NAME}`} />
                  <span>{part.NAME}</span>
              </button>
            )
          })}

      </div>
  );
}

export default PartSelections;
