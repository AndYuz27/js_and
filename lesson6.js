let clearDish = true;

let haveSchoco = 0;
if (clearDish) {
    haveSchoco++;
}

console.log(haveSchoco);

let cleanRoom = true;
let Schoco = 0;
if (clearDish && cleanRoom) {
    Schoco += 2;
} else if (clearDish || cleanRoom) {
    Schoco++;
} else {
    Schoco--;
}

console.log(Schoco);
let age  = 20
