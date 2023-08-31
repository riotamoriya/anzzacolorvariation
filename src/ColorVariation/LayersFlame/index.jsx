const LayersFlame = ({ selectedBody, selectedBelt, selectedSide }) => {

  
    const imageContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      margin: "auto",
      position: 'relative',
      height: '100%',
      boxSizing: 'border-box',
    };
    
    const imageStyle = {
      position: 'absolute',
      right: "0%",
      margin: 'auto',
      maxHeight: "90%",
      width: "auto",
      transform: "none",  // ← Ensure this is set to none
    };
    
    
  

  return (
    <div style={imageContainerStyle}>
      <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedBelt} alt="Belt" style={imageStyle} />
      <img src={selectedSide} alt="Side" style={imageStyle} />
    </div>
  );
};

export default LayersFlame;


