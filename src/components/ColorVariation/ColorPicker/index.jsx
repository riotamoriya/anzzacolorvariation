import React from 'react';

import bodyBlack from './body/body-Black.webp';
import bodyLoden from './body/body-Loden.webp';
import bodyBiancoCandido from './body/body-Bianco-Candido.webp';
import bodyFlake from './body/body-Flake.webp';
import bodyFreshy from './body/body-Freshy.webp';
import bodyCioccolato from './body/body-Cioccolato.webp';
import bodyLacca from './body/body-Lacca.webp';

import handle800 from './handle/handle-800.webp';
import handle280 from './handle/handle-280.webp';
import handle000 from './handle/handle-000.webp';



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
];

const ColorPicker = ({selectedPartsID, setSelectedBody, setSelectedHandle}) => {

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
    console.log(`${selectedPartsID} + ${colorId} + ${layers[selectedPartsID][colorId]}`);

    switch (selectedPartsID) {
      case 0: // body
        setSelectedBody(layers[selectedPartsID][colorId]);
        break;
      
      case 1: // handle
        setSelectedHandle(layers[selectedPartsID][colorId]);
        break;
      
      default:
        break;
    };
  }

  let colorsToRender;
  switch(selectedPartsID) {
    case 0:
      colorsToRender = bodyColors;
      break;
    case 1:
      colorsToRender = handleColors;
      break;
    default:
      break;
  };

  return (
    <React.Fragment>
      {
        colorsToRender.map((color)=>{
          return (
            <div key={color.NAME}>
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


