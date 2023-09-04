const LayersFlame = ({ selectedBody, selectedHandle }) => {

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
  return (
    <div style={imageContainerStyle}>
      <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedHandle} alt="Handle" style={imageStyle} />
    </div>
  );
};

export default LayersFlame;


