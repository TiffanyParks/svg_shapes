// color, shape, and text for the logo
//THEN save the generated SVG to a .svg file
//video link and walkthrough video that demonstrates it functionality and passes of tests
//submit README.md and video



//generate a simple logo for my project



//command-line prompted for text no longer than three characters



//prompt for text color



//provide keyword (OR a hexadecimal number)



//prompt "what shape would you like? attach drop down list of shapes to choose from: circle, triangle, and square"




//what color would you like? provide an input field that accepts hexadecimal # or keywords



//create an SVG file named 'logo.svg'
function Logo(color, shape, text) {
    this.color = color;
    this.shape = shape;
    this.text = text;
}
const color = 'green'
const shape = 'triangle'
const text = 'TAP'

const triangle = new Logo(color, shape, text);
Logo.prototype.logInfo = function () {
    return `Printing a ${this.color}${this.shape} with the text of ${this.text}`;
};

console.log(triangle.logInfo());





//print "Generated logo.svg" is printed in the command line





//logo.svg opens in the browser after generation process


//pixel requirements 300*200 pixel