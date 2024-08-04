// Source: https://leetcode.com/problems/generate-fibonacci-sequence
// 2648. Generate Fibonacci Sequence
// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

// Example 1:
// Input: callCount = 5
// Output: [0,1,1,2,3]
// Explanation:
// const gen = fibGenerator();
// gen.next().value; // 0
// gen.next().value; // 1
// gen.next().value; // 1
// gen.next().value; // 2
// gen.next().value; // 3
// Example 2:

// Input: callCount = 0
// Output: []
// Explanation: gen.next() is never called so nothing is outputted



/**
 * @return {Generator<number>}
 */

var fibGenerator = function* ()
{
    let arr = [];
    arr.push(0);
    for(let i = 1 ; i <= 50; i ++)
    {
        if(arr.length === 1) arr.push(i);
            arr.push(arr[i-1] + arr[i]);
    }
    let count = 0;
    while(true)
    {
        yield arr[count++];
    }

}


var fibGenerator = function*(c) {
    yield 0
    yield 1
    let i=0
    let j=1
    while(true){
        let k=i+j
        yield k
        i=j
        j=k
    }
};


