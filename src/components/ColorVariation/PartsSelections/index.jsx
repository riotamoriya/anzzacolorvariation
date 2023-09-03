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
      width: '10vh',
      height: '10vh'
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
