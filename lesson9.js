let x = 2;
let  step = 10;
let res = 1, i = 0;
/*
    1 * 3 = 3 => степени 1
    3 * 3 = 9 => степень 2
    9 * 3 = 27 => степень 3
*/
while(i < step) {
    res *= x;
    i++;
    console.log(`${x}^${i}=${res}`);
}
/*
    for (inst; inst (true / false); inst;) {
        // повторяющийся код
    }
*/
i = 0;
res =1;
for(;i < step;) {
    res *= x;
    i++;
    console.log(`${x}^${i}=${res}`);
}