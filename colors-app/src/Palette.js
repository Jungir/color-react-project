import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

//indiv palets filled with 20 boxes
class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level : 500, format : 'hex'}
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});

    }
    changeFormat(val){
        this.setState({format : val});
    }
    render() {
        const {colors, name, emoji, id} = this.props.palette;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map ((color) => {
            return <ColorBox paletteId={id} id={color.id} key={color.id} background={color[format]} name={color.name}/>
        });

        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
               
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                     {name}
                     <span className='emoji'>{emoji}</span>
                 </footer>
            </div>
        )
    }
}
export default Palette;