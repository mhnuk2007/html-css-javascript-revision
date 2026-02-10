console.log(x); // undefined because var is hoisted, value not yet assigned
var x = 10;     // initialization happens here

console.log(y); // ReferenceError because let is in Temporal Dead Zone (TDZ)
let y = 20;     // initialized here

console.log(z); // ReferenceError because const is in Temporal Dead Zone (TDZ)
const z = 30;   // must be initialized immediately