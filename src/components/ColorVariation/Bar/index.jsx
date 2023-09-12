
import { angles, bodyColors, handleColors } from "../cores/importLayers";
import { ID_OF_COLOR } from "../cores/constants";

import './style.scss';


const Bar = ({selectedAngleID, selectedBodyDim3, selectedHandleDim3}) => {
  
  const selectedBodyColor = selectedBodyDim3[ID_OF_COLOR];
  const selectedHandleColor = selectedHandleDim3[ID_OF_COLOR];

  return (
      <div className="title">
        <span className="angle">
          {`【${angles[selectedAngleID].MEMO}】品番: `}
        </span>
        <span className="product-id">
          {`${bodyColors[selectedBodyColor].NAME}#${handleColors[selectedHandleColor].NAME}`}
        </span>
      </div>

  )
}

export default Bar;
