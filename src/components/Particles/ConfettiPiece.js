import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring'


const ConfettiPiece = ({ angle, color, distance, size, burst }) => {
    const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;
  const style1 = useSpring({
    transform: `translate(${x}px, ${y}px)`,
    opacity: 0,
    from: {
      opacity: 1,
      transform: 'translate(0px, 0px)'
    }
  })
  return(
    <>
    {burst?
    (<StyledConfettiPiece style={{
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size}px`,
      ...style1,
      }}>
    </StyledConfettiPiece>) :
    (<StyledConfettiPiece2 style={{
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size}px`,
      }}>
    </StyledConfettiPiece2>)
    }
    </>
  )
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const StyledConfettiPiece = styled(animated.div)`
  position: absolute;
  animation: ${fadeOut} 800ms;
`;

const fadeOut2 = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const StyledConfettiPiece2 = styled(animated.div)`
  position: absolute;
  animation: ${fadeOut2} 1000ms forwards;
`;

export default ConfettiPiece;