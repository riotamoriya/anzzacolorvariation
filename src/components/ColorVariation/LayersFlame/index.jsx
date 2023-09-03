const LayersFlame = ({ selectedBody, selectedHandle }) => {

    const imageContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      margin: "auto",
      position: 'relative',
      height: '90%',
      boxSizing: 'border-box',
    };
    
    const imageStyle = {
      position: 'absolute',
      right: "0%",
      margin: 'auto',
      maxHeight: "100%",
      width: "auto",
      transform: "none",  // ← Ensure this is set to none
    };

  return (
    <div style={imageContainerStyle}>
      <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedHandle} alt="Handle" style={imageStyle} />
    </div>
  );
};

export default LayersFlame;


