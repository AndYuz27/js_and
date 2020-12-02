/*объекты (объектный тип данных) */

/* объект в js - это не упорядоченная пара св-св
(ключ) и значений
ключ-значение
*/


let obj = {}; // пустой объект
//объекты никогда нельзя приводить к boolean так
//как любой объект (даже пустой) - это всегда true

let capitals = {
    Россия: "Moscow",
    Spain: "Madrid",  "Japan": "Tokyo", "Great Britain": "London"
};

console.log(capitals.Россия)

capitals.Poland = "Warsaw"
capitals.France=  "Paris";
capitals.Germany=  "Berlin";
let country = "Great Britain"
console.log(capitals[country]);
console.log(capitals.country) //  Получить значение  объекта по свойству
//пройтись по всем странам и вывести информацию о столице

// london is the capital of Great Britain

// Пройтись по всем св-м внутри объекта можно
//при помощи for in
for (let key in capitals){
    console.log(key);
    console.log(`${capitals[key]} is the capital of ${key}`);
}





let car = {
    color: "black",
    model: "Nissan",
    years: 2022,
    automat: true,
    user: {
        name: "Steve",
        doc: "Ex128-po998"
    }
};

// Steve has black CavCCO 2022 years,
// witout automt automat transmission
console.log(`user ${car.user.name} has ${car.color} ${car.model} year, witout automt automat transmission`)
if (car.automat) {
    info += "with ";
} else {
    info += "without ";
}
info += "automat transmision"
console.log(info)