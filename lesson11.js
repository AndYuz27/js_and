
/*
    создать функию getRGB();
    RGB - цветопередача монитора
    px - минимальный квадратик на экране, который заполнен одним цветом

    RGB(255, 0, 0); = red
    RGB(0, 255, 0); = lime
    RGB(0, 128, 0); = green
    RGB(0, 0, 255); = blue



1 байт = 8 бит
8 бит
1 бит = 0 || 1


00000010 = 2
00000011 = 3 = 2 ** 2 -1
00000100 = 4
00001111 = 2 ** 4 - 1 = 15
01111111 = 127
111111111= 255

*/



function getRGB() {
    let red = getNumber(256) // Любое число от 0 до 255 включительно
    let green = getNumber(256)
    let blue = getNumber(256)
    let str= `rgb(${red},${green},${blue})`
    return str
}

let color =` background-color: ${getRGB()}`;
console.log(color)

document.body.style = color;