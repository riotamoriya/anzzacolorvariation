import React from 'react';

import frontBodyBlack from './front/body/body-Black.webp';
import frontBodyLoden from './front/body/body-Loden.webp';
import frontBodyBiancoCandido from './front/body/body-BiancoCandido.webp';
import frontBodyFlake from './front/body/body-Flake.webp';
import frontBodyFreshy from './front/body/body-Freshy.webp';
import frontBodyCioccolato from './front/body/body-Cioccolato.webp';
import frontBodyLacca from './front/body/body-Lacca.webp';
import frontHandle800 from './front/handle/handle-800.webp';
import frontHandle280 from './front/handle/handle-280.webp';
import frontHandle000 from './front/handle/handle-000.webp';

import obliqueBodyBlack from './oblique/body/body-Black.webp';
import obliqueBodyLoden from './oblique/body/body-Loden.webp';
import obliqueBodyBiancoCandido from './oblique/body/body-BiancoCandido.webp';
import obliqueBodyFlake from './oblique/body/body-Flake.webp';
import obliqueBodyFreshy from './oblique/body/body-Freshy.webp';
import obliqueBodyCioccolato from './oblique/body/body-Cioccolato.webp';
import obliqueBodyLacca from './oblique/body/body-Lacca.webp';
import obliqueHandle800 from './oblique/handle/handle-800.webp';
import obliqueHandle280 from './oblique/handle/handle-280.webp';
import obliqueHandle000 from './oblique/handle/handle-000.webp';



const bodyColors = 
[
  {"id": 0,"HEX":"#282828","NAME":"Black","MEMO":"Black"},
  {"id": 1,"HEX":"#2C302A","NAME":"Loden","MEMO":"Loden"},
  {"id": 2,"HEX":"#34180F","NAME":"Cioccolato","MEMO":"Cioccolato"},
  {"id": 3,"HEX":"#99632c","NAME":"Flake","MEMO":"Flake"},
  {"id": 4,"HEX":"#ad393b","NAME":"Lacca","MEMO":"Lacca"},
  {"id": 5,"HEX":"#1d62b5","NAME":"Freshy","MEMO":"Freshy"},
  {"id": 6,"HEX":"#c5c7b8","NAME":"Bianco-Candido","MEMO":"Bianco-Candido"}
];

const handleColors = 
[
  {"id": 0,"HEX":"#c96226","NAME":"LightCamel","MEMO":"800"},
  {"id": 1,"HEX":"#5b290e","NAME":"DarkCamel","MEMO":"280"},
  {"id": 2,"HEX":"#2f2f2f","NAME":"Black","MEMO":"000"},
];


const layers = [
  [
    [
      frontBodyBlack,
      frontBodyLoden,
      frontBodyBiancoCandido,
      frontBodyFlake,
      frontBodyFreshy,
      frontBodyCioccolato,
      frontBodyLacca,
    ],
    [
      frontHandle800,
      frontHandle280,
      frontHandle000,
    ],
  ],
  [
    [
      obliqueBodyBlack,
      obliqueBodyLoden,
      obliqueBodyBiancoCandido,
      obliqueBodyFlake,
      obliqueBodyFreshy,
      obliqueBodyCioccolato,
      obliqueBodyLacca,
    ],
    [
      obliqueHandle800,
      obliqueHandle280,
      obliqueHandle000,
    ],
  ],
];


const ColorPicker = ({selectedAngleID, selectedPartID, setSelectedColorID
  ,setSelectedBody, setSelectedHandle}) => {

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
    marginBottom: '2vh',
  });

  const pushBottun = (colorId) => {
    setSelectedColorID(colorId);

    console.log(selectedPartID);
    console.log(colorId);

    switch(selectedPartID) {
      case 0:
        setSelectedBody(layers[selectedAngleID][selectedPartID][colorId]);
        break;
      case 1:
        setSelectedHandle(layers[selectedAngleID][selectedPartID][colorId]);
        break;
      default:
        break;
    };
  };


  let selectedPartColors;
  switch(selectedPartID) {
    case 0:
      selectedPartColors = bodyColors;
      break;
    case 1:
      selectedPartColors = handleColors;
      break;
    default:
      break;
  };
  
  return (
    <React.Fragment>
      {
        selectedPartColors.map((color)=>{
          return (
            <div key={color.NAME}>
              {/* <button style={buttonStyle} onClick={() => pushBottun(color.id)}> */}
              <button style={buttonStyle} onClick={() => pushBottun(color.id)}>
                <span style={spanStyle(color.HEX)}></span>
              </button>
            </div>
          )
        })
      }
    </React.Fragment>
  );
};

export default ColorPicker;


