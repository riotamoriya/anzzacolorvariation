import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import LayersFlame from "./LayersFlame";
import Bar from "./Bar";
import Price from "./Price";
import PartSelections from "./PartsSelections";

import './style.scss';


import bodyFlake from './ColorPicker/body/body-Flake.webp';
import handle280 from './ColorPicker/handle/handle-280.webp';

const ColorVariation = () => {
    const [selectedPartsID, setSelectedPartsID] = useState(0);
    const [selectedBody, setSelectedBody] = useState(bodyFlake);
    const [selectedHandle, setSelectedHandle] = useState(handle280);


    return (
        
        <div className="color-variation-container">
            <div className="bar-section"><Bar /></div>
            <div className="price-section"><Price /></div>
            <div className="layerFlame-section">
                <LayersFlame 
                    selectedBody={selectedBody}
                    selectedHandle={selectedHandle}
                />
            </div>

            <div className="color-picker-section">
                <ColorPicker selectedPartsID={selectedPartsID} setSelectedBody={setSelectedBody} setSelectedHandle={setSelectedHandle}/>
            </div>

            <div className="parts-section">
                <PartSelections setSelectedPartsID={setSelectedPartsID} />
            </div>
        </div>
    );
}

export default ColorVariation;
