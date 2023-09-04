import React from "react";

const Angle = ({setSelectedAngleID}) => { 

  const angles = 
  [
    {"id": 0, "NAME":"Front","MEMO":""},
    {"id": 1, "NAME":"Side","MEMO":""},
  ];

  const pushBottun = (angleId) => {
    setSelectedAngleID(angleId);
    console.log(angleId);
  };

  return (
      <React.Fragment>
        <button onClick={() => pushBottun(angles[0].id)}>
          <span>{angles[0].NAME}</span>
        </button>
        <button onClick={() => pushBottun(angles[1].id)}>
          <span>{angles[1].NAME}</span>
        </button>
      </React.Fragment>
  );
}

export default Angle;
