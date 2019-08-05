import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColor from './seedColor';
import {generatePalette} from './colorHelpers';
function App() {
  
  
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Palete list goes here</h1>}/>
      <Route exact path='/palette/:id' render={() => <h1>indiv palette goes here</h1>}/>

    </Switch>
    // <div >
      // <Palette palette={generatePalette(seedColor[4])}/>
    // </div>
  );
}

export default App;
