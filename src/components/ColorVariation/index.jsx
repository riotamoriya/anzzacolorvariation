import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import LayersFlame from "./LayersFlame";
import Bar from "./Bar";
import Angle from "./Angle";
import PartSelections from "./PartsSelections";
import Notice from "./Notice";

import './style.scss';

const ColorVariation = () => {
    const [selectedAngleID, setSelectedAngleID] = useState(0); // the front
    const [selectedPartID, setSelectedPartID] = useState(0); // 
    const [selectedColorID, setSelectedColorID] = useState(0); // 

    const [selectedBodyDim3, setSelectedBodyDim3] = useState([0,0,6]);
    const [selectedHandleDim3, setSelectedHandleDim3] = useState([0,1,1]);

    return (
        <div className="color-variation-container">
            <div className="bar-section">
                <Bar 
                    selectedAngleID={selectedAngleID} 
                    selectedBodyDim3={selectedBodyDim3} selectedHandleDim3={selectedHandleDim3}
                />
            </div>

            <div className="notice-section">
                <Notice />
            </div>

            <div className="angle-section">
                <Angle setSelectedAngleID={setSelectedAngleID}
                    selectedBodyDim3={selectedBodyDim3} setSelectedBodyDim3={setSelectedBodyDim3} 
                    selectedHandleDim3={selectedHandleDim3} setSelectedHandleDim3={setSelectedHandleDim3}
                />
            </div>

            <div className="layerFlame-section">
                <LayersFlame 
                    selectedAngleID={selectedAngleID}
                    selectedPartID={selectedPartID} 
                    selectedColorID={selectedColorID}
                    selectedBodyDim3={selectedBodyDim3} selectedHandleDim3={selectedHandleDim3}
                />
            </div>

            <div className="parts-section">
                <PartSelections setSelectedPartsID={setSelectedPartID} />
            </div>

            <div className="color-picker-section">
                <ColorPicker 
                    selectedAngleID={selectedAngleID} selectedPartID={selectedPartID} setSelectedColorID={setSelectedColorID}
                    setSelectedBodyDim3={setSelectedBodyDim3} setSelectedHandleDim3={setSelectedHandleDim3}
                />
            </div>

        </div>
    );
}

export default ColorVariation;
