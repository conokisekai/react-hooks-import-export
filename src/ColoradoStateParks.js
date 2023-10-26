import React from 'react';
import MesaVerde from './parks/MesaVerde';
import { trees, wildlife } from "./parks/RockyMountain";

console.log(trees);

wildlife();

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
