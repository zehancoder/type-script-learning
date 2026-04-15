// generics
// generics function
// generic interface
// generic classes

// generic function
function abcd<T>(a: T) {
  console.log(a);
}
abcd<string>("Zehan");
function efg<A>(a: A) {
  console.log(a);
}
efg("arman");

// generic interfaces
interface generifInterface<T> {
  name: string;
  age: number;
  key: T;
}
function newInterFace(obj: generifInterface<string>) {} 
newInterFace({ name: "zehan", age: 21, key: "male" });

// generic classes
class GenerifClass<T> {
  constructor(public key: T) {}
}
let b1 = new GenerifClass<string>("hey");
let b2 = new GenerifClass<number>(4);
