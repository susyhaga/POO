function Brick() {
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick() {
        Brick.call(this);

    this.opacity = 0.5;
    this.color = "blue";
}


const brickBlue = new BlueGlassBrick()

console.log(brickBlue)