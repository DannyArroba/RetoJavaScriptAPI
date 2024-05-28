let nombre="Danny Arroba";

let num1=5;
let num2="5";
let num3=6;
let num4=8;
console.log(nombre);
///compara el valor
console.log(num1===num2);
///compara el mismo tipo de dato 5 o "5" no es igual
console.log(num1===num2);

//compara el valor y el tipo de dato
//!== y el ===

//& todas verdadera
//or una de ellas que sea 

console.log(num1==num2 && num3!=num4);

console.log(num1===num2 || num3!=num4);

function Sumar(num1,num2) {
let res=num1+num2;
console.log(res);   
}

Sumar(1,5);