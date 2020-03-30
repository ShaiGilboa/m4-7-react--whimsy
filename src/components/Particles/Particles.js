import React from 'react';
import { range, random } from '../../utils.js';
import ConfettiPiece from './ConfettiPiece';


const PARTICLE_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fb8c00'];

const Particles = () => {
  return (
    <>
    {range(12).map(i => <ConfettiPiece
      key={i} 
      angle={random(0,360)}
      color={PARTICLE_COLORS[random(0,4)]}
      distance={random(10,30)}
      size={random(2,10)}
      burst={i%2}
      />)}
    </>
  )
}

export default Particles;