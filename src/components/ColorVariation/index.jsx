import React, { useState } from "react";

import {
    ID_OF_BODY, ID_OF_HANDLE, ID_OF_FRONTAL,
} from "./cores/constants";

import Bar from "./sections/Bar";
import LayersFlame from "./sections/LayersFlame";
import ColorController from "./sections/ColorController";
import AngleController from "./sections/AngleController";
import PartsController from "./sections/PartsController";

import './style.scss';

const ColorVariation = () => {

    // The states of current selected pattern IDs by Users.
    const [selectedAngleID, setSelectedAngleID] = useState(ID_OF_FRONTAL); // The Angle (is initialized as FRONTAL)
    const [selectedPartID, setSelectedPartID] = useState(ID_OF_BODY); // The Part of bag (is initialized as BODY)
    const [selectedColorID, setSelectedColorID] = useState(null); // The Color of bag (is initialized as null because no problem any colors at first point)

    // The displayed pattern of layers which are components of the Whole Image.
    const [selectedBodyDim3, setSelectedBodyDim3] = useState([ID_OF_FRONTAL, ID_OF_BODY, 6]);
    const [selectedHandleDim3, setSelectedHandleDim3] = useState([ID_OF_FRONTAL, ID_OF_HANDLE, 2]);

    return (
        <div className="color-variation-container">
            {/* The top of UI: The information for users. */}
            <div className="bar-section">
                <Bar
                    selectedAngleID={selectedAngleID}
                    selectedBodyDim3={selectedBodyDim3} selectedHandleDim3={selectedHandleDim3}
                />
            </div>

            {/* The left of UI: The controller of Angles selection */}
            <div className="angle-section">
                <AngleController setSelectedAngleID={setSelectedAngleID}
                    selectedBodyDim3={selectedBodyDim3} setSelectedBodyDim3={setSelectedBodyDim3}
                    selectedHandleDim3={selectedHandleDim3} setSelectedHandleDim3={setSelectedHandleDim3}
                />
            </div>

            {/* The center of UI: The display of images */}
            <div className="layerFlame-section">
                <LayersFlame
                    selectedAngleID={selectedAngleID}
                    selectedPartID={selectedPartID}
                    selectedColorID={selectedColorID}
                    selectedBodyDim3={selectedBodyDim3} selectedHandleDim3={selectedHandleDim3}
                />
            </div>

            {/* The ceiling of UI: The controller of Parts selection */}
            <div className="parts-section">
                <PartsController setSelectedPartsID={setSelectedPartID} />
            </div>

            {/* The right of UI: The controller of Colors selection */}
            <div className="color-picker-section">
                <ColorController
                    selectedAngleID={selectedAngleID} selectedPartID={selectedPartID} setSelectedColorID={setSelectedColorID}
                    setSelectedBodyDim3={setSelectedBodyDim3} setSelectedHandleDim3={setSelectedHandleDim3}
                />
            </div>

        </div>
    );
}

export default ColorVariation;
