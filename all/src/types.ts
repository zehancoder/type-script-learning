// Besic type
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unkonwn, Void, Null, Undefine, Never

// primitive types
const a = "hello world"; // this is primitive type data
const b = a; // we can copy primitive data and can change copy data
console.log(b);
const nums: number = 50;
const num = 20; // auto set types
const str: string = "Sarthak vhaiya"; // string type
const string = "hello";
const boolean = false;
const trueBoolean: boolean = true;

// reference types
const ref = [2, 3, 4, 5];
const copyOfRef = ref; // if we want change copy data it acctually change real data from ref variable
console.log(copyOfRef);

// Array
const arr = [1, 2, 3, "string"]; // its set autometically their types; so here is (number | string) []..  number or string and number of array
const myArr: number[] = [20, 10, 50, 30, 40];

// Tuples
let tuple: [string, number, boolean] = ["zehan", 3, false];

// enums
// enums look like object key valu pair
enum userData {
  admin = "admin",
  guest = "guest",
  Super_Admin = "Super_Admin",
}
// usases
const arman = userData.admin;
const riaz = userData.guest;

// any      // if we not give any value in a variable then the variable type set in any;
let anything; //  if we hover on it it's show me type is any;
anything = 4;
anything = "zehan"; // any ke poroborti te je kono value dewa jai..

//  unknown
let unknownType: unknown;
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
function voidFunc(): void {
  console.log("this is void function");
}
// jode func string, number, boolean etc return kore tahole;
function returnableFunc(): string {
  return "this type is string";
}

// null
let nullType: null;
// nullType = 12; error

// undefine
let undefineType: undefined;
// undefineType = 5; error



