
// === === === === === ===

console.log("Початок");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

console.log("Кінець");

// Початок
// Кінець
// setTimeout 1

// === === === === === ===

console.log("Початок");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Кінець");

// Початок
// Кінець
// Promise
// setTimeout

// === === === === === ===

console.log("Початок");

setTimeout(() => {
console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
console.log("Promise 1");
}).then(() => {
console.log("Promise 2");
});

setTimeout(() => {
console.log("setTimeout 2");
}, 0);

console.log("Кінець");

// Початок
// Кінець
// Promise 1
// Promise 2
// setTimeout 1
// setTimeout 2

// === === === === === ===

async function asyncFunc() {
    console.log("asyncFunc початок");
    await Promise.resolve();
    console.log("asyncFunc кінець");
    }
    
    console.log("Початок");
    asyncFunc();
    console.log("Кінець");
    
    // Початок
    // asyncFunc початок
    // Кінець
    // asyncFunc кінець



















