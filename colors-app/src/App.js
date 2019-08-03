import React from 'react';
import Palette from './Palette';
import seedColor from './seedColor';
import {generatePalette} from './colorHelpers';
function App() {
  console.log(generatePalette(seedColor[4]));
  
  return (
    <div >
      <Palette {...seedColor[4]}/>
    </div>
  );
}

export default App;
