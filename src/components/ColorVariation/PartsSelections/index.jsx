import React, { useState } from "react";
import './style.scss';

import { parts } from "../cores/importLayers";

const PartSelections = ({ setSelectedPartsID }) => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const hoverStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  })

  return (
      <div className="controllerStyle">
          {parts.map(part => {
            return (
              <button
                  className="buttonStyle"
                  style={hoverStyle(part.Object)}
                  key={part.NAME}
                  onMouseEnter={() => setHoveredPart(part.Object)} // カーソルがボタンに乗ったときのハンドラ
                  onMouseLeave={() => setHoveredPart(null)} // カーソルがボタンから離れたときのハンドラ
                  onClick={() => {setSelectedPartsID(part.id);}}
              >
                <img src={part.Object} alt={`Icon for ${part.NAME}`} />
                <span className="">{part.NAME}</span>
              </button>
            )
          })}

      </div>
  );
}

export default PartSelections;
