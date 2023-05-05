const inquirer = require('inquirer');
const fs = require('fs');
const prompt = require('prompt');
//inquirer to genterate questions
inquirer


// color, shape, and text for the logo
//THEN save the generated SVG to a .svg file
//video link and walkthrough video that demonstrates it functionality and passes of tests
//submit README.md and video
// .prompt([
//     {
//         type: 'list',
//         message: 'Select a shape from the list?',
//         name: 'shapes',
//         choices: ['triangle', 'circle', 'square'],
//         validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
//     },
//     {
//         type: 'input',
//         message: 'Would you like a blue, red or green backgroud color?',
//         name: 'color',
//         // validate: (value) => { if (value === blue || read || green) { return true } else { return 'I need a value to color.' } }
//     },
  
//     {
//         type: 'input',
//         message: 'What three characters would you to include on your shape?',
//         name: 'characters',
//         validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
//     },
    // {
    //     type: 'list',
    //     message: 'Choose a font color from the list?',
    //     name: 'font_color',
    //     choices: ['orange', 'pink', 'yellow', 'white'],
    //     validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
    // },
    


//generate a simple logo for my project

// ])
// .then((data) => {
//     const filename = `shapes.svg`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Your logo is on the way')
//     );
//   });


// //create an SVG file named 'logo.svg'
// function Logo(color, shape, text) {
//     this.color = color;
//     this.shape = shape;
//     this.text = text;
// }
// const color = 'green'
// const shape = 'triangle'
// const text = 'TAP'

// function Triangle(color, shape, text) {
//     Logo.call(this, color, shape, text);
//     this.color = color;
//     this.shape = shape;
//     this.text = text;
// }

// Triangle.prototype.pyramid = function () {
//     return `Printing a ${this.color}${this.shape} with the text of ${this.text}`;
// };

// function Circle(color, shape, text) {
//     Logo.call(this, color, shape, text);
//     this.color = color;
//     this.shape = shape;
//     this.text = text;
// }

// Circle.prototype.round = function () {
//     return `Printing a ${this.color}${this.shape} with the text of ${this.text}`;
// };

// function Square(color, shape, text) {
//     Logo.call(this, color, shape, text);
//     this.color = color;
//     this.shape = shape;
//     this.text = text;
// }

// Square.prototype.box = function () {
//     return `Printing a ${this.color}${this.shape} with the text of ${this.text}`;
// };

// const triangle = new Triangle('triangle', 'blue', 'TAP')


// const svgLlogo = new Logo(color, shape, text);
// Logo.prototype.logInfo = function () {
//     return `Printing a ${this.color}${this.shape} with the text of ${this.text}`;
// };

// console.log(shapeGenerator.logInfo());





//print "Generated logo.svg" is printed in the command line





//logo.svg opens in the browser after generation process


//pixel requirements 300*200 pixel