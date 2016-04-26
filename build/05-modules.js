"use strict";

var _aModule = require("./a-module");

var _bModule = require("./b-module");

var _bModule2 = _interopRequireDefault(_bModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import * as stuff from "./a-module"

console.log("add: " + (0, _aModule.add)(10, 5));
console.log("sub: " + (0, _aModule.sub)(10, 5));
(0, _bModule2.default)();
// console.log(`add10: ${stuff.add10(10, 5)}`);
// console.log(`lots of stuff: ${stuff.its10} ${stuff.itsAlso10} ${stuff.butThisIs11}`)