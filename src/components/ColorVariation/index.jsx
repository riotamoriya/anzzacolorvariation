import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import LayersFlame from "./LayersFlame";
import Bar from "./Bar";
import Price from "./Price";
import PartSelections from "./PartsSelections";

import * as sc from "./core/colorsAndLayers.js";
import * as pb from "./core/partsSelectButton.js";

import './style.scss';


const ColorVariation = () => {
    const [selectedPartsType, setSelectedPartsType] = useState(pb.parts[0]);
    const [selectedBelt, setSelectedBelt] = useState(sc.initBeltLayer);
    const [selectedBody, setSelectedBody] = useState(sc.initBodyLayer);
    const [selectedSide, setSelectedSide] = useState(sc.initSideLayer);

    return (
        
        <div className="color-variation-container">
            <div className="bar-section"><Bar /></div>
            <div className="price-section"><Price /></div>
            <div className="layerFlame-section">
                <LayersFlame 
                    selectedBody={selectedBody}
                    selectedBelt={selectedBelt}
                    selectedSide={selectedSide}
                />
            </div>

            <div className="color-picker-section">
                <ColorPicker selectedPartsType={selectedPartsType} 
                    setSelectedBelt={setSelectedBelt}
                    setSelectedBody={setSelectedBody}
                    setSelectedSide={setSelectedSide}
                    hexs={sc.hexs} layers={sc.layers}
                />
            </div>

            <div className="parts-section">
                <PartSelections
                    setSelectedBelt={setSelectedBelt}
                    setSelectedBody={setSelectedBody}
                    setSelectedSide={setSelectedSide}
                    setSelectedPartsType={setSelectedPartsType}
                />
            </div>
        </div>
    );
}

export default ColorVariation;
