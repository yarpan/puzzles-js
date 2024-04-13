// Firstly, let’s get this out of the way, FizzBuzz is a task where 
// the programmer is asked to print numbers from 1 to 100, 
// but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 
// and lastly print “FizzBuzz” for multiples of three and five.

import { test, expect } from "@playwright/test";

test("Check BackToMainPage Button", async ({ }) => {
    expect(await fizzBuzzFunction(100)).toEqual("Buzz");
    expect(await fizzBuzzFunction(1)).toEqual("");
    expect(await fizzBuzzFunction(30)).toEqual("FizzBuzz");
    expect(await fizzBuzzFunction(33)).toEqual("Fizz");
});

function fizzBuzzFunction(value) {
    let isDevidable3 = (value % 3 == 0);
    let isDevidable5 = (value % 5 == 0);
    if (isDevidable3 && isDevidable5)
        return "FizzBuzz";
    else if (isDevidable3)
        return "Fizz";
    else if (isDevidable5)
        return "Buzz";
    else return ""
}