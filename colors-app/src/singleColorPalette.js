import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './Footer';
class singleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format : 'hex'};
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy){
        //return all shades of the given color
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors){
           shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }
    changeFormat(val){
        this.setState({format : val});
    }
    render() {
        const colorBoxes = this._shades.map(color => {
            return <ColorBox key={color.id} name={color.name} background={color[this.state.format]} showLink={false}/>
        });
        return (
            <div className='Palette'>
                <Navbar handleChange={this.changeFormat} showAllColors={false}/>
               <div className="Palette-colors">
                   {colorBoxes}
               </div>
               <PaletteFooter name={this.props.palette.name} emoji={this.props.palette.emoji}/>
            </div>
        )
    }
}
export default singleColorPalette;