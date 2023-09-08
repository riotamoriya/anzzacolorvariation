
import { angles, bodyColors, handleColors } from "../cores/importLayers";
import './style.scss';


const Bar = ({selectedAngleID, selectedBodyDim3, selectedHandleDim3}) => {
  
  return (
      <div>
        <span className="title">{`【${angles[selectedAngleID].MEMO}】品番: ${bodyColors[selectedBodyDim3[2]].NAME}#${handleColors[selectedHandleDim3[2]].NAME}`}</span>
        <span ></span>
      </div>

  )
}

export default Bar;