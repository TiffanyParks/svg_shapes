

class Shape{
    constructor(color, text, ) {
        this.color = color;
        this.text = text;
        this.shape
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
    constructor(color, text, shape) {
        super(color, text, size);
        this.shape = shape;
    }
}

class Circle extends Shape{
    constructor(color, text, shape) {
        super(color, text, size);
        this.shape = shape;
    }
}

class Square extends Shape{
    constructor(color, text, shape) {
        super(color, text, size);
        this.shape = shape;
    }
}

const newTriangle = new Triangle(
    'purple',
    'TAP',
    'triangle'
);

const newCircle = new Circle(
    'purple',
    'TAP',
    'circle'
);

const newSquare = new Square(
    'purple',
    'TAP',
    'circle'
);






