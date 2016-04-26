
const foo = (x = 3, y = 5 + x) => console.log(`x is ${x}, y is ${y}`);

foo(6);