import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
const styles = {
    root : {
        background : 'grey',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    container : {
        width: '90%',
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        flexWrap : 'wrap',
    },
    nav : {
        display : 'flex',
        maxWidth : '80%',
        justifyContent : 'space-between',
        color : 'white'
    },
    palettes : {
        boxSizing : 'border-box',
        width : '70%',
        display : 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        justifyContent : 'space-evenly',
        gridGap : '3%',
        height: '80%'
       
    }
};
class PaletteList extends Component {
    goToPalette = (id) =>{
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const {palettes, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className= {classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map( palette => (
                        <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />))}
                    </div>
                </div>

               
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);