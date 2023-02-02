// functions

function add(a: number, b:number): number  {
    return a + b;
}

const sum1 = add(5,1);

function createAdder (a: number): (number) => number {
    return function (b:nbumber) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);


function fullName(firstName : strinf, lastName?: string = "Perez"): string {
    return `${first} ${last}`
}

const richard = fullName('Richard')