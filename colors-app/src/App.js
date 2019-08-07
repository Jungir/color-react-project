import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColor from './seedColor';
import SingleColorPalette from './singleColorPalette';
import {generatePalette} from './colorHelpers';
class App extends Component {

  findPalette(id){
    return seedColor.find(function (palette) {
      return palette.id ===id;
      });
  }
  render(){
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColor} {...routeProps}/>}/>
        <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
        <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette/>}/>
      </Switch>
      // <div >
        // <Palette palette={generatePalette(seedColor[4])}/>
      // </div>
    );
  }
}
  




export default App;
