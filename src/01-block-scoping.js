function something(){
  var x = 2;
  
  if (x === 1){
    var x = 2;
    var y = 3;
  }
  console.log("x is " + x);
  console.log("y is " + y);
}

something();

//let 
// function something2(){
//   'use strict'

//   let x = 1;
  
//   if (x === 1){
//     let x = 2;
//     let y = 3
//     console.log("inside if x is " + x);
//     console.log("inside if y is " + y);
//   }
//   console.log("x is " + x);
//   console.log("y is " + y);
// }

// something2();

//const

//Block-level function declarations
// 'use strict'
// const i = 42;
// if (i === 42) {
//   doSomething();
//   function doSomething(){
//     console.log("something");    
//   }
// }

// doSomething();