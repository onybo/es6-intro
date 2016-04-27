import { add, sub } from "./a-module" //picking two imports from a module
//import something from "./b-module"  //default import
//import * as stuff from "./a-module"

console.log(`add: ${add(10, 5)}`);
console.log(`sub: ${sub(10, 5)}`);
something();
// console.log(`add10: ${stuff.add10(10, 5)}`);
// console.log(`lots of stuff: ${stuff.its10} ${stuff.itsAlso10} ${stuff.butThisIs11}`)