import bodyBlack from '../ColorPicker/body/body-Lacca.webp';
import bodyLoden from '../ColorPicker/body/body-Loden.webp';
import bodyBiancoCandido from '../ColorPicker/body/body-Bianco-Candido.webp';
import bodyFlake from '../ColorPicker/body/body-Flake.webp';
import bodyFreshy from '../ColorPicker/body/body-Freshy.webp';
import bodyCioccolato from '../ColorPicker/body/body-Cioccolato.webp';
import bodyLacca from '../ColorPicker/body/body-Lacca.webp';

import handle800 from '../ColorPicker/handle/handle-800.webp';
import handle280 from '../ColorPicker/handle/handle-280.webp';
import handle000 from '../ColorPicker/handle/handle-000.webp';





const layers = [[
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
]];


const LayersFlame = ({ selectedBody, selectedHandle, selectedAngleID, selectedPartsID, selectedColorID}) => {

  console.log(`${selectedAngleID}, ${selectedPartsID}, ${selectedColorID}`);
  
  
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
      <img src={layers[selectedAngleID][0][selectedColorID]} alt="Body" style={imageStyle} />
      <img src={layers[selectedAngleID][1][selectedColorID]} alt="Handle" style={imageStyle} />

      {/* <img src={selectedBody} alt="Body" style={imageStyle} />
      <img src={selectedHandle} alt="Handle" style={imageStyle} /> */}
    </div>
  );
};

export default LayersFlame;


