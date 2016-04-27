'use strict'

var add2 = function (x) {
  return x + 2;
}

const add3 = x => x + 3;

const add = (x, y) => x + y; 

const add2xy = (x, y) => (
   { x: x+2, y: y +2 } 
);

debugger;



function Person() {
  this.age = 0;
  console.log("age is initialized to: " + this.age);
  
  setInterval(function (){
    console.log(`age is now: ${++this.age}`);
  }, 1000);
}

// function Person() { //constructor must be old style function
//   this.age = 0;
//   console.log(`age is initialized to: ${this.age}`);
  
//   setInterval(() => console.log(`age is now: ${++this.age}`), 1000);
// }

let p = new Person();

