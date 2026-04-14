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

// // class
// class Car {
//   name = "bugati";
//   color = "black";
//   speed = 220;
// }
// const honda = new Car();
// console.log(honda);

// class Bottle {
//   redius = 100;
//   color = "white";
//   price = 10;
// }
// const b1 = new Bottle();
// console.log(b1);

// // types define in classes constractor
// class defineWithType {
//   public name;
//   public gender;
//   public age;
//   public isHandsome;
//   public thumbnail;
//   constructor(
//     name: string,
//     gender: string,
//     age: number,
//     isHandsome: boolean,
//     thumbnail: string,
//   ) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.isHandsome = isHandsome;
//     if (thumbnail) {
//       this.thumbnail = "null.jpg";
//     }
//   }
// }

// const newUser = new defineWithType("zehan", "male", 20, true, "zehan.png");
// console.log(newUser);
// class Music {
//   constructor(
//     public name: string,
//     public artist: string,
//     public length: number,
//     public free: boolean,
//     public thumbnail: string,
//   ) {
//     if (!thumbnail) {
//       thumbnail = "default.png";
//     }
//   }
// }
// const music1 = new Music(
//   "People talking without speaking, people hearing without listening.",
//   "harsh",
//   1200,
//   false,
//   "peple.jpeg",
// );

/// access modifirs (public, private, protected)
// public
// class BottleMaker {
//   constructor(public name: string) {
//     // we can change public variable value from anywhere private value give me error when I want to change it
//     this.name = name;
//   }
//   changing() {
//     this.name = "change";
//   }
// }
// class carMaker {
//   constructor(private name: string) {
//     // we can change public variable value from anywhere private value give me error when I want to change it
//     this.name = name;
//   }
//   changing() {
//     this.name = "change";
//   }
// }
// // private
// const newBottle = new BottleMaker("7up");
// newBottle.name = "change from outside";
// const newCar = new carMaker("Bugati");
// newCar.name = "change from outside"; // private give me error in typescript it's not changable because it's private
// // example 2 of private
// class Bottle2 {
//   constructor(private name: string) {}
// }
// class Bottle3 extends Bottle2 {
//   // bottle2 ar method and variable gulo bottle3 te access kora jabe...
//   constructor(name: string) {
//     super(name);
//   }
//   getValue() {
//     console.log(this.name); // name private howar karone access korar somoy error deai
//   }
// }
// // protected        // aitate amra notun akta class a extends korle oikhane change korle kono error deba na.. kintu jode akebare bahira change korte chai tokhon oita error deba..
// class Bottle4 {
//   constructor(protected name: string) {
//     this.name = name;
//   }
// }
// class Bottle5 extends Bottle4 { // bottle5 subclass of bottle4
//   changeName() {
//     this.name = "Protected can change in extends classes";
//   }
// }
// const bottle5 = new Bottle5('my bottle');
// bottle5.name = 'name is protected'

// // Readonly properties
// class User{
//     constructor(public readonly name: string){

//     }
//     changeName(){
//         this.name = 'Name chagne' /// readonly properties ke amra kothao change korte pare na...
//     }
// }
// const newUser = new User('zehan');
// newUser.changeName();

// Optional properties
interface user {
  name: string;
  age: number;
  gender: string;
}
class User {
  constructor(
    public name: string,
    public age: number,
    public gender?: string,
  ) {
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
  constructor(public _name: string) {}
  get getMyName() {
    /// geeter func
    return this._name;
  }
  set setMyName(newName: string) {
    // seeter function
    this._name = newName;
  }
}
const user = new GeeterClass("zehan");
user.setMyName = 'new name';
user.getMyName;


/// static numbers 
// static bebohar korle amra variable ke new call kora chara oder ke static bhabe rakhte pare;
class Shery{
   static version = 1.0
}
Shery.version = 2; /// static korar pole instance banano charai oigula ke access and change kora jacceh