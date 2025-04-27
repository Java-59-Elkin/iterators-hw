
export function fibonacciArr(num) {
    const res = [];
    let a = 0, b = 1;
    for (let i = 0; i < num; i++) {
        res.push(a);
        const c = a+b;
        a = b;
        b = c;
    }
    return res;
}

export function fibonacciSum(res) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum;
}

function fibonacciPrint(res) {
    for (let i = 1; i < res.length; i++) {
        console.log(res[i]);
    }
}
