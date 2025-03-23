
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
