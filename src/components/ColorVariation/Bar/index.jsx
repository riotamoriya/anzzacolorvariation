
import { angles, bodyColors, handleColors } from "../cores/importLayers";
import './style.scss';


const Bar = ({selectedAngleID, selectedBodyDim3, selectedHandleDim3}) => {
  
  return (
      <div className="title">
        <span className="angle">
          {`【${angles[selectedAngleID].MEMO}】品番: `}
        </span>
        <span className="product-id">
          {`${bodyColors[selectedBodyDim3[2]].NAME}#${handleColors[selectedHandleDim3[2]].NAME}`}
        </span>
      </div>

  )
}

export default Bar;
