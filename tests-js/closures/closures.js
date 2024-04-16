/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */




/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe:(n)=>{
            if(val === n)return true;
            else throw new Error ("Not Equal");
        },

        notToBe:(n)=>{
            if(val !== n)return true;
            else throw new Error ("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

