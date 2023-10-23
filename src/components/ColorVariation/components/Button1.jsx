import React, { useState } from 'react';

const Button1 = ({ children, ...props }) => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const hoverStyle = part => ({
    background: hoveredPart === part ? '#eee' : 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  });

  return (
    <button
      style={hoverStyle(children)}
      onMouseEnter={() => setHoveredPart(children)}
      onMouseLeave={() => setHoveredPart(null)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button1;