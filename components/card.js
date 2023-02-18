import React, { useState } from "react";

const Card = (props) => {
  const defaultStyle = {
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    color: 'white',
  }

  return (
    <div style={defaultStyle}>
      {props.children}
    </div>
  );
};

export default Card;
