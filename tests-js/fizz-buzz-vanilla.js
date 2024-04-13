// Firstly, let’s get this out of the way, FizzBuzz is a task where 
// the programmer is asked to print numbers from 1 to 100, 
// but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 
// and lastly print “FizzBuzz” for multiples of three and five.

const testData = [
    [100, "Buzz"],
    [1, ""],
    [30, "FizzBuzz"],
    [33, "Fizz"]
];

//check for testData array
for (let i = 0; i < testData.length; i++) {
    let result = fizzBuzzFunction(testData[i][0]);
    let isPassed = (result == testData[i][1]);
    console.log('Test for "' + testData[i][0] + '" - expected: "'+ testData[i][1] 
        + '", actual: "' + result + '", is Passed: ' + isPassed);
}

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