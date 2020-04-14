import React from 'react';
import { range, random } from '../../utils.js';
import ConfettiPiece from './ConfettiPiece';


const PARTICLE_COLORS = [{start: '#e53935', end: '#1ac6ca'}, {start: '#1e88e5', end: '#e1771a'}, {start: '#43a047', end: '#bc5fb8'}, {start: '#fdd835', end: '#0227ca'}, {start: '#fb8c00', end: '#0473ff'}];

const Particles = () => {
  return (
    <>
    {range(random(8,14)).map(i => <ConfettiPiece
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