import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './Footer';
import {Link} from 'react-router-dom'
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
            return <ColorBox key={color.name} name={color.name} background={color[this.state.format]} showLink={false}/>
        });
        return (
            <div className='SingleColorPalette Palette'>
                <Navbar handleChange={this.changeFormat} showAllColors={false}/>
               <div className="Palette-colors">
                   {colorBoxes}
                   <div className="go-back ColorBox">
                       <Link to={`/palette/${this.props.palette.id}`} className="back-button">Go Back</Link>
                   </div>
               </div>
               <PaletteFooter name={this.props.palette.name} emoji={this.props.palette.emoji}/>
            </div>
        )
    }
}
export default singleColorPalette;