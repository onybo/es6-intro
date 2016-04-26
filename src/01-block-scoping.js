'use strict'

function something(){
  var x = 1;
  
  if (x === 1){
    var x = 2;
  }
  console.log("x is " + x);
}

something();

// function something2(){
//   let y = 1;
  
//   if (y === 1){
//     let y = 2;
//     console.log("inside if y is " + y);
//   }
//   console.log("y is " + y);
// }

// something2();

//const

//Block-level function declarations
// const i = 42;
// if (i === 42) {
//   function doSomething(){
//     console.log("something");    
//   }
// }

// doSomething();