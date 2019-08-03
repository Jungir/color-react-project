import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

//indiv palets filled with 20 boxes
class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level : 500}
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});

    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map ((color) => {
            return <ColorBox background={color.hex} name={color.name}/>
        });

        return (
            <div className='Palette'>
                <div className="slider">
                    <Slider defaultValue={level} step={100} min={0} max={900} onAfterChange={this.changeLevel}/>    
                </div>
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}
export default Palette;