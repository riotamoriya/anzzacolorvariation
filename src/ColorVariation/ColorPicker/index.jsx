import React from "react";

const ColorPicker = ({selectedPartsType, setSelectedBelt, setSelectedBody, setSelectedSide, 
  hexs, layers}) => {

  const buttonStyle = {
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  };

  const spanStyle = (color) => ({
    display: 'inline-block',
    width: '5vh',
    height: '5vh',
    backgroundColor: color,
    marginRight: '5px',
  });

  const pushBottun = (hex) => {

    switch (selectedPartsType) {
      case 'body':
        setSelectedBody(layers[selectedPartsType + hex]);
        break;
      case 'belt':
        setSelectedBelt(layers[selectedPartsType+hex]);
        break;
      case 'side':
        setSelectedSide(layers[selectedPartsType + hex]);
        break;
      default:



    }
  };

  return (
    <React.Fragment>
      {hexs.map((color) => (
        <div key={color}>
          <button style={buttonStyle} onClick={() => pushBottun(color)}>
            <span style={spanStyle('#'+color)}></span>
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ColorPicker;


