let msec = Math.floor(Math.random() * (10000000000 - 10000) + 10000);
let sec = Math.floor(msec / 1000); //миллесекнды делить на 1000
let min = Math.floor(sec / 60); //секунды делить на 60
let hrs = Math.floor(min / 60);
let day = Math.floor(hrs / 24);
sec = sec - (min * 60);
min = min - (hrs * 60);
hrs -= day * 24; 
console.log("Милисекунд: " + msec);
console.log("Cекунд: " + sec);
console.log("Минут: " + min);
console.log("Часов: " + hrs);
console.log("Дней : " + day);
console.log(`${day} дней ${hrs} часов ${min} минут ${sec} секунд`)



function sayHello (name="No Name", age = 16) {
console.log(`Hello, ${name}, тебе ${age} лет`)
}
sayHello("alex", 15)
sayHello("alex", 42)
sayHello("alex", 20)
Math.random(12)


function parabola(x){
let y = x ** 5;
console.log(x, y);
}
for (let i = -25; i <=25; i++){
    parabola(i);
}

let comp = {
    mb: "Gigabyte",
    vidcard: "nvidia",
    ram_gb: 16,
    hdd_size_gb: 512,
    ssd: false,
    soft: {
        os: "windows 10",
        drv: "new",
        browser: "Opera"
    }
}
let info = (`у меня есть компьютер, материнская плата от ${comp.mb}, виеокарта от ${comp.vidcard}, оперативной памяти ${comp.ram_gb} гигабайт `)
if (comp.ssd) {
    info += "есть";
} else {
    info += "без"
}
info += " ssd"
console.log(info)