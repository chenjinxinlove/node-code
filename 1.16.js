console.log("\n");
console.log("------阶乘计算------");
console.log("\n");
let iNum, iFactorial = 1;
let strFactorial;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("请输入阶乘运算起始数值：\nn = ", (iNum) => {
    strFactorial = iNum + "!=" + factorial(iNum);
    console.log(strFactorial);
    console.info("\n");
    rl.close();
})

factorial = (n) => {
    if (n > 0) {
        if (n == 1) {
            iFactorial = 1;
        } else {
            iFactorial = n * factorial(n -1);
        }
    }
    return iFactorial;
}