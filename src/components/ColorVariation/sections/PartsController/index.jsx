import React from "react";
import './style.scss';

import Button1 from "../../components/Button1";

import { parts } from "../../cores/importLayers";

const PartsController = ({ setSelectedPartsID }) => {
  return (
    <div className="controllerStyle">
      {parts.map(part => {
        return (
          <Button1 className="buttonStyle" key={part.NAME}
            onClick={() => { setSelectedPartsID(part.id); }}
          >
            <img src={part.Object} alt={`Icon for ${part.NAME}`} />
            <span className="">{part.NAME}</span>
          </Button1>
        )
      })}

    </div>
  );
}

export default PartsController;
