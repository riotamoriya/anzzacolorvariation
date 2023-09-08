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


import bodyIcon from "./icon/body.webp";
import handleIcon from "./icon/handle.webp";

import frontalShadow from "./icon/frontal-shadow.webp";
import obliqueShadow from "./icon/oblique-shadow.webp";

export const shadowIcons = 
[
  frontalShadow, obliqueShadow
];

export const parts = 
[
  {"id": 0, "Object":bodyIcon,"NAME":"Body","MEMO":""},
  {"id": 1, "Object":handleIcon,"NAME":"Handles","MEMO":""},
];

export const layers = [
  [
    [
      frontBodyBlack,
      frontBodyLoden,
      frontBodyBiancoCandido,
      frontBodyFlake,
      frontBodyLacca,
      frontBodyFreshy,
      frontBodyCioccolato,
    ],
    [
      frontHandle000,
      frontHandle280,
      frontHandle800,
    ],
  ],
  [
    [
      obliqueBodyBlack,
      obliqueBodyLoden,
      obliqueBodyBiancoCandido,
      obliqueBodyFlake,
      obliqueBodyLacca,
      obliqueBodyFreshy,
      obliqueBodyCioccolato,
    ],
    [
      obliqueHandle000,
      obliqueHandle280,
      obliqueHandle800,
    ],
  ],
];

// 画像を事前に読み込むことで、UX向上を期待
export const ReadInitializeInvisibly = () => {
  // ネストされた配列をフラットにする
  const flattenedLayers = layers.flat(2);
  
  return (
    <>
      {flattenedLayers.map((img, index) => (
        <img key={index} src={img} alt="Preload" style={{ display: "none" }} />
      ))}
    </>
  )
}

export const bodyColors = 
[
  {"id": 0,"HEX":"#282828","NAME":"Black","MEMO":"Black"},
  {"id": 1,"HEX":"#2C302A","NAME":"Loden","MEMO":"Loden"},
  {"id": 2,"HEX":"#34180F","NAME":"Cioccolato","MEMO":"Cioccolato"},
  {"id": 3,"HEX":"#99632c","NAME":"Flake","MEMO":"Flake"},
  {"id": 4,"HEX":"#ad393b","NAME":"Lacca","MEMO":"Lacca"},
  {"id": 5,"HEX":"#1d62b5","NAME":"Freshy","MEMO":"Freshy"},
  {"id": 6,"HEX":"#c5c7b8","NAME":"Bianco-Candido","MEMO":"Bianco-Candido"}
];

export const handleColors = 
[
  {"id": 0,"HEX":"#2f2f2f","NAME":"Black","MEMO":"000"},
  {"id": 1,"HEX":"#5b290e","NAME":"DarkCamel","MEMO":"280"},
  {"id": 2,"HEX":"#c96226","NAME":"LightCamel","MEMO":"800"},
];

export const angles = 
[
  {"id": 0, "NAME":"Frontal","MEMO":"正面"},
  {"id": 1, "NAME":"Oblique","MEMO":"斜視"},
];

