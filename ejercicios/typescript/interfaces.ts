// Interfaces
enum Color {
    red = "red"
    green = "green"
}

interface Rectangle {
    height: number
    width: number
    color?: Color
};

let rect: Rectangle = {
    height: 4,
    width: 6   
    
}

function area(r: Rectangle): number {
    return r.height * r.width
}

const areaReact = area(rect);

rect.toString = function() {
    return this.color ? `Un rectangolo ${this.color}` : `Un rectangulo`
}