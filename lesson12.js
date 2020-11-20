/*
    Есть пачка со свечками
    5 - 100 (вкл) свечек в пачке
    каждый год торт со свечками = возрасту
    на сколько лет хватит упаковки
*/
function getNumber(max = 100, min = 0){
    let n = Math.random() * (max - min) + min;
    n = Math.floor(n);
    return n;
}
/*
function getName(name = "No Name" ){
    console.log("Привет, " + name + "!");
}
getName("Steve")
getName("Alex")
getName()
getName()
getName()
getName()
*/

function getSvechka(cnt) {
    let age = 0
    // Пока в пачке есть свечки, мы празднуем день рождения!
    while (cnt >= age) {
        //console.log(`Человеку исполнилось ${age} лет`)
        cnt = cnt - age;
        //console.log(`В упаковке ${cnt} свечек`)
        
        if (cnt <= age) {
            return age;
        }
       age++;
       
    }
   // return age - 1;
}
console.time('candles')
let candles = getNumber(1001,100);
let finalAge = getSvechka(100000, 1);
console.log(candles + ' свечек хватило на ' + finalAge + " лет");
console.timeEnd("candles")