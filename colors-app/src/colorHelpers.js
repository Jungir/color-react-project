import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generatePalette(starterPalette){
    let newPalette = {
        name: starterPalette.paletteName,
        emoji : starterPalette.emoji,
        id : starterPalette.id,
        colors : {}

    };
    for (let level of levels){
        // console.log('level' + level);       
        newPalette.colors[level] = [];
    }
    for(let color of starterPalette.colors){
        // console.log('color', color);
        let scale = generateScale(color.color, 10).reverse();
        //push i into scale
        for (let i in scale){
            newPalette.colors[levels[i]].push({
                name : `${color.name} ${i}00`,
                id : color.name.toLowerCase().replace(/ /g, '-'),
                hex : scale[i],
                rgb : chroma(scale[i]).css(),
                rgba : chroma(scale[i]).css().replace("rgb", 'rgba').replace(")", ",1.0)")
            })
        }
        
    }
    return newPalette;
}

function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ];
}


function generateScale(hexColor, numberOfColors) {
    return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numberOfColors);
}

export {generatePalette};