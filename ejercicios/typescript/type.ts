console.log("hello TypeScipt");

function add (a: number,b: number) {
    return a+b
}

const sum = add(2,3);

// console.log(sum);


// TipeScript Types

// boolean
let muted: boolean = true


// number

let age = 6;
let numerator: number = 42;
let denominator: number = age;
let result = numerator / numerator;


// string

let nombre: string = "pedro";


// arrays

let people: string[] = [];
people = ["Isabel", "Nicole", "raul"]
// people.push("9000")

let peopleAnNumbers: array< string | number > = []
peopleAnNumbers.push("Richard");
peopleAnNumbers.push(9000);


// enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi colo favorito es ${colorFavorito}`);


// any
let joker:any = "Joker"
joker = { type: 'Wildcard' }


// object
let someObject: object = {key: "value"}