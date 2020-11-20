/*
    В зависимости от возраста правильно написать слово
    (существительное)
    год 21 31 41 кроме 11
    года  2-4 21-24 31-34 41-44 кроме 12-14
    лет 0 5-20 25-30 45-50

*/
let age= Math.random(Math.floor) * 100;
let word =''
//45 / 10*4
// 111 <= age % 100 <= 14
if (age  % 100 === 11 || age % 100 === 12 || age  % 100 === 13|| age  % 100 === 14 ){
    word = 'лет'
} else if  (age % 10 === 1){
    word ='год';
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4)  {
    word = 'года'
} else {

    word = 'лет'
}
console.log (`Джеральд ${age} ${word}`)

/*
Math.PI - число ПИ (3,14)
Math.E - Число Эйлера (2,7)
Math.sin(0) - синус нуля
    Math.sin(Math.PI)
    .cos(n)
    .tg(n)
    .ctg(n)
    Math.abs(5) - абсолютное значение (число по модулю)
    Math.round(3.8) -> 4
От дома до остановки 5 мин
Автобус прибывает через 5 минут
Math.ceil(2.1) -> 3 - округление в большую сторону
Math.floor(2.987456) -> 2 округление в меньшую сторону

*/

let rand = Math.random(Math.floor) * 100;
rand = Math.floor(rand);
console.log(rand);