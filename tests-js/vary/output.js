
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


// === === === === === ===

console.log("Початок");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

async function asyncFunc() {
    console.log("asyncFunc початок");
    await Promise.resolve();
    console.log("asyncFunc кінець");
}

asyncFunc();

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("Кінець");

// Початок
// asyncFunc початок
// Кінець
// asyncFunc кінець
// Promise
// setTimeout


// === === === === === ===

async function test() {
    console.log("1");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("2");
}

console.log("3");
test();
console.log("4");

// 3
// 1
// 4
// 2


// === === === === === ===

async function foo() {
    console.log("foo початок");
    await bar();
    console.log("foo кінець");
}

async function bar() {
    console.log("bar початок");
    await Promise.resolve();
    console.log("bar кінець");
}

console.log("Початок");
foo();
console.log("Кінець");

// Початок
// foo початок
// bar початок
// Кінець
// bar кінець
// foo кінець


// === === === === === ===

console.log("Початок");

setTimeout(() => {
    console.log("setTimeout 1");
    Promise.resolve().then(() => {
        console.log("Promise в setTimeout");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("setTimeout 2");
}, 0);

console.log("Кінець");

// Початок
// Кінець
// Promise 1
// setTimeout 1
// Promise в setTimeout
// setTimeout 2


// === === === === === ===

console.log("Початок");

Promise.resolve().then(() => {
console.log("Promise 1");
return Promise.resolve();
}).then(() => {
console.log("Promise 2");
});

console.log("Кінець");

// Початок
// Кінець
// Promise 1
// Promise 2


// === === === === === ===

console.log("Початок");

setTimeout(() => {
console.log("setTimeout");
}, 0);

async function asyncFunc() {
console.log("asyncFunc початок");
await new Promise(resolve => resolve());
console.log("asyncFunc кінець");
}

asyncFunc();

Promise.resolve().then(() => {
console.log("Promise");
});

console.log("Кінець");

// Початок
// asyncFunc початок
// Кінець
// asyncFunc кінець
// Promise
// setTimeout


// === === === === === ===

async function foo() {
console.log("foo початок");
await bar();
console.log("foo кінець");
}

async function bar() {
console.log("bar початок");
await Promise.resolve();
console.log("bar кінець");
}

console.log("Початок");
setTimeout(() => console.log("setTimeout"), 0);
foo();
console.log("Кінець");

// Початок
// foo початок
// bar початок
// Кінець
// bar кінець
// foo кінець
// setTimeout


// === === === === === ===

async function foo() {
    console.log("foo початок");
    await Promise.resolve();
    console.log("foo кінець");
}

console.log("Початок");
foo();
console.log("Кінець");

// Початок
// foo початок
// Кінець
// foo кінець


// === === === === === ===

console.log("Початок");

Promise.resolve().then(() => {
    console.log("Promise 1");
    return Promise.resolve();
}).then(() => {
    console.log("Promise 2");
});

console.log("Кінець");

// Початок
// Кінець
// Promise 1
// Promise 2


// === === === === === ===

async function foo() {
console.log("foo початок");
await new Promise(resolve => setTimeout(resolve, 1000));
console.log("foo кінець");
}

console.log("Початок");
foo();
console.log("Кінець");

// Початок
// foo початок
// Кінець
// foo кінець


// === === === === === ===

console.log("Початок");

setTimeout(() => console.log("setTimeout 1"), 0);

Promise.resolve().then(() => {
console.log("Promise 1");
setTimeout(() => console.log("setTimeout 2"), 0);
});

async function asyncFunc() {
console.log("asyncFunc початок");
await Promise.resolve();
console.log("asyncFunc кінець");
}

asyncFunc();

console.log("Кінець");

// Початок
// asyncFunc початок
// Кінець
// Promise 1
// asyncFunc кінець
// setTimeout 1
// setTimeout 2














