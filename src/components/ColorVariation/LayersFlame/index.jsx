import React from "react";


const LayersFlame = ({ selectedAngleID, selectedPartID, selectedColorID
  ,selectedBody ,selectedHandle }) => {
  
  
  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // 追加
    margin: "auto",
    position: 'relative',
    height: '90%',
    width: '100%',  // 追加
    boxSizing: 'border-box',
  };
  
  const imageStyle = {
    position: 'absolute',
    margin: 'auto',
    maxHeight: "100%",
    width: "auto",
    transform: "none",
  };

  const Fn = () => {
    switch(selectedPartID) {
      case 0:
        break;
      case 1:
        break;
      default:
        break;
    };

  };

  
  return (
    <div style={imageContainerStyle}>

      {console.log(`selectedAngleID:${selectedAngleID}, selectedPartID:${selectedPartID}, selectedColorID:${selectedColorID}`)}
      {/* {console.log(layers[selectedAngleID][selectedPartID][selectedColorID])} */}

      <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedHandle} alt="Handle" style={imageStyle} />

      {/* <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedHandle} alt="Handle" style={imageStyle} /> */}
    </div>
  );
};

export default LayersFlame;


