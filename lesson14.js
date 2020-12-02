let numbers = [5, 1, 9, 3, 8, 6, 4]; // Массив чисел 
console.log(numbers[10]); // в скобках указывается порядковый
//номер элемента массива - индекс элемента! Индексы в массиве начинаются с НУЛЯ

numbers[10] = 4;
console.log(numbers)

/*
массив - упорядоченная посл. значений
*/
const week = ["понедельник", "Вторник", "среда", "Четверг", "Пятница", "Суббота", "Восскресенье"]
console.log(`сегодня ${week[2]}`)

console.log(week.length)

for (let i = 0; i < week.length; i++){
    console.log(`день недели: ${i}`)
    console.log("\t" + week[i])
}

/*
Есть массив из чисел из 10 числел
добавить в массив число 5 под индексом 99

Вывести сумму чисел, находящихся в массиве
*/

let numbers2 = [5, 1, 9, 3, 8, 6, 4, 88, 87, 99]; // Массив чисел 
console.log(numbers2[99]); // в скобках указывается порядковый
//номер элемента массива - индекс элемента! Индексы в массиве начинаются с НУЛЯ

numbers2[99] = 5;
console.log(numbers2)


function getNumber(max= 11, min= 0) {
 return Math.floor(Math.random() * (max-min) + min)
}
let arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = getNumber();
}
arr[99]= 5;
console.log(arr)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]) {
        sum += arr[i]
    }
    sum += arr[i];
    console.log(i, arr[i], sum)
}
console.log(sum);