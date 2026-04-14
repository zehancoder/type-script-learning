"use strict";
// Besic type
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unkonwn, Void, Null, Undefine, Never
Object.defineProperty(exports, "__esModule", { value: true });
// primitive types
const a = "hello world"; // this is primitive type data
const b = a; // we can copy primitive data and can change copy data
console.log(b);
const nums = 50;
const num = 20; // auto set types
const str = "Sarthak vhaiya"; // string type
const string = "hello";
const boolean = false;
const trueBoolean = true;
// reference types
const ref = [2, 3, 4, 5];
const copyOfRef = ref; // if we want change copy data it acctually change real data from ref variable
console.log(copyOfRef);
// Array
const arr = [1, 2, 3, "string"]; // its set autometically their types; so here is (number | string) []..  number or string and number of array
const myArr = [20, 10, 50, 30, 40];
// Tuples
let tuple = ["zehan", 3, false];
// enums
// enums look like object key valu pair
var userData;
(function (userData) {
    userData["admin"] = "admin";
    userData["guest"] = "guest";
    userData["Super_Admin"] = "Super_Admin";
})(userData || (userData = {}));
// usases
const arman = userData.admin;
const riaz = userData.guest;
// any      // if we not give any value in a variable then the variable type set in any;
let anything; //  if we hover on it it's show me type is any;
anything = 4;
anything = "zehan"; // any ke poroborti te je kono value dewa jai..
//  unknown
let unknownType;
unknownType = 44;
unknownType = "hello"; // amra unknown type ke nijer icceh moto change korte pare kintu string a jokhon toUpperCase lagate jabo tokhon somosha hove karon variable a first a number roiche amra number ke uppercase korte pare na;
unknownType = false;
// unknownType.toUpperCase() //  ame jokhon string hello upore toUpperCase lagate chache eta error deccah
if (typeof unknownType === "string") {
    // ai vhabe aita kaj kore
    unknownType.toUpperCase();
}
// VOID
// void in functions, function kisu jode return na kore tahole amra void use kori
// function jokhon kono  kisu return kore jemon string, number, unknown, boolean anything tokhon amader ke oita bole deta hoi.
function voidFunc() {
    console.log("this is void function");
}
// jode func string, number, boolean etc return kore tahole;
function returnableFunc() {
    return "this type is string";
}
// null
let nullType;
// nullType = 12; error
// undefine
let undefineType;
// undefineType = 5; error
//# sourceMappingURL=types.js.map