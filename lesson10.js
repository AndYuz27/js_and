/*
    дано n - миллесекнуд
    ннаписать сколько дней часов минут секунд
    в этом числе n
*/


let msec = Math.floor(Math.random() * 1000000000 - 10000) + 10000;
let sec = Math.floor(msec / 1000);
let min = Math.floor(sec / 60);
sec = sec - (min * 60);
let hours = Math.floor(min / 60);
min = min - (hours * 60);
let days = Math.floor(hours / 24);
hours -= days *24;

console.log("секунд " + sec);
console.log("Минут " + min);
console.log(`${days} дней ${hours} часов ${min} минут ${sec} секунд`);
//это был в тесте

/*
    Функции 
    математические функци f(x) = x + 2;
*/
/*
let name = " Джеральд"
console.log("Привет," + name + '!')
name = " Оливия"
console.log("Привет," + name + '!')
name = " Денис"
console.log("Привет," + name + '!')
*/

function sayHello(name = "No Name", age="16") { //name - аргумент функции
    

    console.log(`Привет, ${name}! Тебе ${age} лет`);
}
sayHello("Стив");
sayHello("Андрей");
sayHello("Костя");
sayHello("Helen");
sayHello();
sayHello();
sayHello();

function parabola(x){
    let y = x ** 2;
    console.log(x, y);
}
/*
    Главные правила ООП:
    Полиморфизм - переиспользование кода
    Наследование -
    животное: 4 лапы, хвост, ест корм
    Собака: животное + лает, любит человека
    Ретривер: собака + ласковое, любит детей
    Инкапсуляция
    кусок кода (внутри функции) не должен ничего
    делать без надобности
 */
for (let i = -5; i <= 5; i++) {
    let result = parabola(i);
    console.log(i, result)
}
