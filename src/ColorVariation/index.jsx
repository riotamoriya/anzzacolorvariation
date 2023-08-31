import React, { useState } from "react";

import ColorPicker from "./ColorPicker";
import LayersFlame from "./LayersFlame";

import * as sc from "./core/colorsAndLayers.js";
import * as pb from "./core/partsSelectButton.js";

import './style.scss';


const Bar = () => <h2>Customize your Wallet</h2>;
const Price = () => { 
    return (
        <React.Fragment></React.Fragment>
    );
}

const PartSelection = ({ setSelectedPartsType }) => {
    const [hoveredPart, setHoveredPart] = useState(null);

    const imgStyle = {
        width: '3rem',
        height: '3rem'
    };

    const buttonStyle = part => ({
        marginRight: '2rem',
        marginLeft: '2rem',
        background: hoveredPart === part ? '#eee' : 'none', // カーソルが乗っているときは背景色をgrayに
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    });

    return (
        <React.Fragment>
            {pb.parts.map(part => (
                <button
                    style={buttonStyle(part)}
                    key={part}
                    onMouseEnter={() => setHoveredPart(part)} // カーソルがボタンに乗ったときのハンドラ
                    onMouseLeave={() => setHoveredPart(null)} // カーソルがボタンから離れたときのハンドラ
                    onClick={() => setSelectedPartsType(part)}
                >
                    <img style={imgStyle} src={pb.icons[part]} alt={`Icon for ${part}`} />
                    <h2>{part}</h2>
                </button>
            ))}
        </React.Fragment>
    );
}

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
                <PartSelection 
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
