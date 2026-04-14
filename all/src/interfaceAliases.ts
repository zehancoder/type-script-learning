// Interface and types aliases
//   defining interfaces
// using interface to defining  object shapes
// extending interface

// type aliases
// intersection types

interface user {
  name: string;
  email: string;
  password: string;
  gender?: string; // ? question mark dela aita optional hoye jai thokhon chaile aita amra object phatanor shomoy deta chaile deta pare noito ba nao deta pare.
}
function defineUser(obj: {
  name: string;
  email: string;
  gender?: string;
}): string {
  // aikhane amra object tar betore ke ke thakbe and tader types ke hove sheita function parameter object ar sathei define kore peltese kintu amra chaila oitake interface ar modde o rakhte pare
  obj.email = "arman@gmail.com";
  obj.gender = "male";
  return obj.email;
}
/// parameter a define kora value/properties gulo function call korar shomoy obossoi argument akare object ar modde patate hobe noito error deba..
console.log(defineUser({ name: "jonaeed", email: "zehan@gmail.com" }));
function defineWithInterface(obj: user): void {
  obj.name = "arman";
}
defineWithInterface({
  email: "naim@gmail.com",
  name: "naim",
  password: "1234",
});

// define interface
interface defineFace {
  english: string;
  math: number;
  history: string;
}

// extend interface
interface User {
  name: string;
  email: string;
  password: string;
}
interface Admin extends User {
  admin: boolean;
}
function extendedInterface(obj: Admin): any {
  obj.admin = true;
  return obj;
}
console.log(
  extendedInterface({
    email: "zehan@gmail.com",
    name: "zehan",
    password: "zehan",
    admin: false,
  }),
);

// merge interface
interface abcd {
  email: string;
  name: string;
}
interface abcd {
  // 2 ta interface merge hoye akta hoye jabe
  password: string;
}
function mergeInterface(obj: abcd) {
  obj.password;
}

// type aliases
type typesOfA = string | number | null; // aikhane aksa the thaka type guloke akti notun type variable ar modde rakhse;
let a: typesOfA;
// a = true; // error
a = "zehan";
function func(text: typesOfA) { // aikhane text ar type ta string, number or null hote hobe ar baire hote parbe na
  return text;
}
func("hello");

// intersections types
type intersection = {
    name: string,
    email: string
};
type admin = intersection & {
    getDetails(user: string): void;

}
function intersection(a:admin){
    a.getDetails('zehan');
}
