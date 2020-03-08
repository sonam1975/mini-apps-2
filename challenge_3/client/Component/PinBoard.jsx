import React from "react";

const PinBoard = ({ pin, handleBall }) => {
  return (
    <button onClick={handleBall} value={pin}>
      {pin}
    </button>
  );
};

export default PinBoard;
