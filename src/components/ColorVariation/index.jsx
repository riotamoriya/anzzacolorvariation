import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import LayersFlame from "./LayersFlame";
import Bar from "./Bar";
import Angle from "./Angle";
import PartSelections from "./PartsSelections";

import './style.scss';


import bodyBlack from './ColorPicker/front/body/body-Lacca.webp';
import bodyLoden from './ColorPicker/front/body/body-Loden.webp';
import bodyBiancoCandido from './ColorPicker/front/body/body-BiancoCandido.webp';
import bodyFlake from './ColorPicker/front/body/body-Flake.webp';
import bodyFreshy from './ColorPicker/front/body/body-Freshy.webp';
import bodyCioccolato from './ColorPicker/front/body/body-Cioccolato.webp';
import bodyLacca from './ColorPicker/front/body/body-Lacca.webp';

import handle800 from './ColorPicker/front/handle/handle-800.webp';
import handle280 from './ColorPicker/front/handle/handle-280.webp';
import handle000 from './ColorPicker/front/handle/handle-000.webp';

const layers = [
    [
        [
            bodyBlack,
            bodyLoden,
            bodyBiancoCandido,
            bodyFlake,
            bodyLacca,
            bodyFreshy,
            bodyCioccolato,
        ],
        [
            handle800,
            handle280,
            handle000,
        ],
    ],
    [
        [
            bodyBlack,
            bodyLoden,
            bodyBiancoCandido,
            bodyFlake,
            bodyLacca,
            bodyFreshy,
            bodyCioccolato,
        ],
        [
            handle800,
            handle280,
            handle000,
        ],
    ],
];


const ColorVariation = () => {
    const [selectedAngleID, setSelectedAngleID] = useState(0); // the front
    const [selectedPartID, setSelectedPartID] = useState(0); // 
    const [selectedColorID, setSelectedColorID] = useState(0); // 

    // const [selectedPartsColorID, setSelectedPartsColorID] = useState([0,0]); // 

    const [selectedBody, setSelectedBody] = useState(layers[0][0][0]);
    const [selectedHandle, setSelectedHandle] = useState(layers[0][1][0]);

    return (
        
        <div className="color-variation-container">
            {/* <div className="bar-section"><Bar /></div> */}
            <div className="angle-section">
                <Angle setSelectedAngleID={setSelectedAngleID}
                />
            </div>

            <div className="layerFlame-section">
                <LayersFlame 
                    selectedAngleID={selectedAngleID}
                    selectedPartID={selectedPartID} 
                    selectedColorID={selectedColorID}
                    selectedBody={selectedBody} selectedHandle={selectedHandle}
                />
            </div>

            <div className="parts-section">
                <PartSelections setSelectedPartsID={setSelectedPartID} />
            </div>

            <div className="color-picker-section">
                <ColorPicker 
                    selectedAngleID={selectedAngleID} selectedPartID={selectedPartID} setSelectedColorID={setSelectedColorID}
                    setSelectedBody={setSelectedBody} setSelectedHandle={setSelectedHandle}
                />
            </div>

        </div>
    );
}

export default ColorVariation;
