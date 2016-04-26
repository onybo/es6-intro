'use strict'

// var add2 = function (x) {
//   return x + 2;
// }

// const add2 = x => x + 2

// const add2 = (x, y) => (
//    { x: x+2, y: y +2 } 
// );

// const add_es6_3 = (x, y) => x + y;



// add(1,2);
let z = add2(4,5);


function Person() {
  this.age = 0;
  console.log("age is initialized to: " + this.age);
  
  setInterval(function (){
    console.log("age is now: " + ++this.age);
  }, 1000);
}

// function Person() {
//   this.age = 0;
//   console.log("age is initialized to: " + this.age);
  
//   setInterval(() => console.log("age is now: " + ++this.age), 1000);
// }

let p = new Person();
