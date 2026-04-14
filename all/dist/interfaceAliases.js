"use strict";
// Interface and types aliases
//   defining interfaces
// using interface to defining  object shapes
// extending interface
Object.defineProperty(exports, "__esModule", { value: true });
function defineUser(obj) {
    // aikhane amra object tar betore ke ke thakbe and tader types ke hove sheita function parameter object ar sathei define kore peltese kintu amra chaila oitake interface ar modde o rakhte pare
    obj.email = "arman@gmail.com";
    obj.gender = "male";
    return obj.email;
}
/// parameter a define kora value/properties gulo function call korar shomoy obossoi argument akare object ar modde patate hobe noito error deba..
console.log(defineUser({ name: "jonaeed", email: "zehan@gmail.com" }));
function defineWithInterface(obj) {
    obj.name = "arman";
}
defineWithInterface({
    email: "naim@gmail.com",
    name: "naim",
    password: "1234",
});
function extendedInterface(obj) {
    obj.admin = true;
    return obj;
}
console.log(extendedInterface({
    email: "zehan@gmail.com",
    name: "zehan",
    password: "zehan",
    admin: false,
}));
function mergeInterface(obj) {
    obj.password;
}
let a;
// a = true; // error
a = "zehan";
function func(text) {
    return text;
}
func("hello");
function intersection(a) {
    a.getDetails('zehan');
}
//# sourceMappingURL=interfaceAliases.js.map