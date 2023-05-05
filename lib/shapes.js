

class Shape{
    constructor(color, text, type ) {
        this.color = color;
        this.text = text;
        this.type = type;
    }
    
    printLogoSVG() {
    console.log('Your shape is on the way');
    }
    
}

const shapeTriangle = new Shape('purple','triangle', 'TAP');
const shapeCircle = new Shape('blue','circle', 'NJW');
const shapeSquare = new Shape;('pink','square', 'JDP');

shapeTriangle.printLogoSVG();
shapeCircle.printLogoSVG();
shapeSquare.printLogoSVG();

class Triangle extends Shape{
    constructor(color, text, type, triangle) {
        super(color, text, type);
        this.triangle = triangle;

    }
}

class Circle extends Shape{
    constructor(color, text, type, circle) {
        super(color, text, type);
        this.circle = circle;
    }
}

class Square extends Shape{
    constructor(color, text, type, square) {
        super(color, text, type);
        this.square = square
    }
}

const newTriangle = new Triangle(
    'purple',
    'TAP',
    'shape_logo',
    'triangle'
);

const newCircle = new Circle(
    'blue',
    'NJW',
    'shape_logo',
    'circle'
);

const newSquare = new Square(
    'pink',
    'JDP',
    'shape_logo',
    'square'
);

newTriangle.printLogoSVG();
newCircle.printLogoSVG();
newSquare.printLogoSVG();




