

function TernarOP()
{
let a = 20;
let b = "twenty";
let c = 30;

// есть x ? b: a; ~~~ если x true - то b, если false - то a;
const OprtnResult = a < c ? b: a;


// есть x ?? y; ~~~ если x != null or undefined - то x, иначе y    
const AnotherOprtnResult = "left" ?? "right";

    
let Strtext = "sometxtstring";
// есть еще один вид x ??= y; ~~~ если x null or undefined - то x = y;
Strtext ??= b;
console.log(Strtext);
    
    
console.log(OprtnResult);
console.log(AnotherOprtnResult);

}

TernarOP();
