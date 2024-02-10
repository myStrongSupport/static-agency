import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -2;

  animation: square 25s infinite alternate;
  @keyframes square {
    to {
      transform: translate(90vw, 90vh) rotate(360deg);
    }
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: green;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -2;

  animation: circle 25s infinite alternate;
  @keyframes circle {
    to {
      transform: translate(30vw, -30vh) rotate(360deg);
    }
  }
`;
const Rect = styled.div`
  width: 80px;
  height: 80px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: red;
  opacity: 0.4;
  position: absolute;
  top: 0px;
  left: 0px;
  top: 400px;
  left: -50px;
  z-index: -2;

  animation: rect 25s infinite alternate;
  @keyframes rect {
    to {
      transform: translate(90vw, -50vh) rotate(360deg);
    }
  }
`;

const AnimateShapes = () => {
  return (
    <React.Fragment>
      <Square />
      <Circle />
      <Rect />
    </React.Fragment>
  );
};

export default AnimateShapes;
