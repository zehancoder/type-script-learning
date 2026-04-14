"use strict";
/// calsses and object
/// class definiton
/// constractor
/// access modifirs (public, private, protected)
/// readonly properties
/// optional properties
/// parameter properties
/// getters and setters
/// static members
/// abstract classes and method
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        // question(?) mark dela oita option hoye jai orthat oitar value deleo pare na delao pare.. gender?:string
    }
}
const newUser = new User("zehan", 21, "male");
const newUser1 = new User("zehan", 21);
// para meter properties aita amra age thakei kortesi
//  constructor(
//     public name: string,     /// parameter
//     public age: number,
//     public gender?: string,
//   )
// GETTER AND SETTERS
class GeeterClass {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get getMyName() {
        /// geeter func
        return this._name;
    }
    set setMyName(newName) {
        // seeter function
        this._name = newName;
    }
}
const user = new GeeterClass("zehan");
user.setMyName = 'new name';
user.getMyName;
/// static numbers 
// static bebohar korle amra variable ke new call kora chara oder ke static bhabe rakhte pare;
class Shery {
    static version = 1.0;
}
Shery.version = 2; /// static korar pole instance banano charai oigula ke access and change kora jacceh
//# sourceMappingURL=classessObjects.js.map