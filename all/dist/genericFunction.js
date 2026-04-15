"use strict";
// generics
// generics function
// generic interface
// generic classes
Object.defineProperty(exports, "__esModule", { value: true });
// generic function
function abcd(a) {
    console.log(a);
}
abcd("Zehan");
function efg(a) {
    console.log(a);
}
efg("arman");
function newInterFace(obj) { }
newInterFace({ name: "zehan", age: 21, key: "male" });
// generic classes
class GenerifClass {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new GenerifClass("hey");
let b2 = new GenerifClass(4);
//# sourceMappingURL=genericFunction.js.map