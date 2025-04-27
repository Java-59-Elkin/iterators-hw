import {fibonacciArr, fibonacciSum} from "../functions/fibonacci.js";

describe("fibonacciArr", () => {
    test("array of fibonacci numbers", () => {
        expect(fibonacciArr(1)).toEqual([0]);
        expect(fibonacciArr(6)).toEqual([0, 1, 1, 2, 3, 5]);

    });
})

describe("fibonacciSum", () => {
    test("sum of fibonacci numbers", () => {
        expect(fibonacciSum(fibonacciArr(1))).toEqual(0);
        expect(fibonacciSum(fibonacciArr(6))).toEqual(12);
    })
})