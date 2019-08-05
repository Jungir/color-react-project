import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    //scoped css styles
    main: {
        backgroundColor: 'purple',
        border: '3px solid teal',
        
    },
    secondary: {
        backgroundColor:'Pink',
        "& h1" : {
            color: 'white',
            "& span" : {
                color: 'green'
            }
        }
    }
}

function MiniPalette(props){
    const {classes} = props;
    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
            <section className={classes.secondary}>
                <h1> inside section  Mini Palette</h1>            
            </section>
        </div>
    )
}
export default withStyles(styles)(MiniPalette);