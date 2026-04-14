//type inference
// understading type inference
// type annotations

//  type inference
// value dakhe typescript outar type ta ke sheta buje pele.. tokhon amra oitake type inference bole
let inferenceType = "Saimon"; // aita autometic vhabe type ta string dore neba;

// type annotations
// amra jokhon akta value ke akadik type dea thake tokhon oita ke bola hoi type annotations
let annotateType: string | boolean | number;
annotateType = "string type";
annotateType = true;
annotateType = 44;
// annotateType = undefined; // error (aita ke age anotate kora hoinai)

// type annotation with function
function helloFunc(a: string, b: number): string | void {
    return 'Hello' + a;
};
