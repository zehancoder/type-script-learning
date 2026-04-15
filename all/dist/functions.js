"use strict";
// Functions
// Function types
// Optional and default parameter
// Rest Parameter
// Overloads
Object.defineProperty(exports, "__esModule", { value: true });
// functions
// function abcd(name: string, age: number, cb: (arg: string) => void) {
//   cb("Zehan");
// }
// abcd("zehan", 21, (arg: string) => {
//   console.log(arg);
// });
// // optional parameter in function // default parameter
// function nameStore(name: string, age: number, gender?: string = "Female") {
//   // here is default parameter in gender parameter
//   console.log(name, age, gender);
// }
// nameStore("zehan", 21, "Male");
// nameStore("Arman", 17);
// // rest parameter  
// function numbersOfArray(...args: number[]) {
//     console.log(args)
// }
// numbersOfArray(1, 2, 3, 4, 5, 6);
// // spread
// const arr = [2, 3, 4, 5, 6];
// const arr2 = [...arr];
// // function overloads
// function overloadFunc(a: string):void;
// function overloadFunc(a:string, b: number):void;
// function overloadFunc(a: any, b?: any){
//     if(typeof a === 'string' && typeof b === undefined){
//         console.log('hey')
//     }
//     if(typeof a === 'string' && typeof b === 'number'){
//         return 123;
//     }
// }
// overloadFunc("hey");
// overloadFunc('hey', 21);    
//# sourceMappingURL=functions.js.map