import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({ size, color }) => {
  return (
    <StyledCircle style={{width:`${size}px`, height:`${size}px`}}/>
  )
}

const StyledPoppingCircle = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    transform: scale(1);
    background-color:rgb(182, 26, 125)
  }
  100%{
    opacity: 0;
  }
`;


const StyledCircle = styled.div`
  position: absolute;
  z-index:0;
  background-color: rgb(219, 29, 150);
  border-radius:20px;
  border: solid .5px rgb(182, 26, 125);
  animation: ${StyledPoppingCircle} 400ms forwards cubic-bezier(.46,1.84,.93,.58);
`

export default PoppingCircle;